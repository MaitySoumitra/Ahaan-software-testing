import React, { useEffect, useState } from "react";
import axios from "axios";
import { TfiSharethis } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./BlogPage.css";

// Helper functions remain the same
const reactions = [
  { emoji: "👍", label: "thumbs up" },
  { emoji: "❤️", label: "love" },
];

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const trimToWords = (htmlContent, wordLimit = 20) => {
  const text = stripHtml(htmlContent);
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const formatDateTime = (isoString) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "Invalid Date";
  }
};

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedReactions, setSelectedReactions] = useState({});
  const [reactionCounts, setReactionCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeShare, setActiveShare] = useState(null); // Track open share menu
  const blogsPerPage = 9;

  const fetchAndUpdateBlogs = async () => {
    try {
      const res = await axios.get("https://ahaansoftware.com/blog-db.json");
      const fetchedBlogs = Array.isArray(res.data) ? res.data.reverse() : [];
      setBlogs(fetchedBlogs);

      const counts = {};
      const local = {};
      fetchedBlogs.forEach((blog) => {
        counts[blog.id] = {
          "thumbs up": blog.reactions?.["thumbs up"] || 0,
          love: blog.reactions?.["love"] || 0,
        };

        const localReaction = localStorage.getItem(`reacted_${blog.id}`);
        if (localReaction) {
          local[blog.id] = localReaction;
        }
      });

      setReactionCounts(counts);
      setSelectedReactions(local);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    fetchAndUpdateBlogs();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleReaction = async (blogId, newReaction) => {
    const prevReaction = selectedReactions[blogId];
    if (prevReaction === newReaction) return;

    localStorage.setItem(`reacted_${blogId}`, newReaction);
    setSelectedReactions((prev) => ({ ...prev, [blogId]: newReaction }));

    setReactionCounts((prev) => {
      const updated = { ...prev };
      if (!updated[blogId]) updated[blogId] = { "thumbs up": 0, love: 0 };
      if (prevReaction && updated[blogId][prevReaction] > 0) {
        updated[blogId][prevReaction] -= 1;
      }
      updated[blogId][newReaction] = (updated[blogId][newReaction] || 0) + 1;
      return updated;
    });

    try {
      const formData = new URLSearchParams();
      formData.append("id", blogId);
      formData.append("reaction", newReaction);
      formData.append("prevReaction", prevReaction || "");

      await fetch("https://ahaansoftware.com/update-json.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });
      await fetchAndUpdateBlogs();
    } catch (err) {
      console.error("Failed to update reaction:", err);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="container">
      <div className="row mb-2 p-3 align-items-stretch mt-5">
        {paginatedBlogs.map((blog) => {
          const slug = createSlug(blog.title);
          const blogUrl = `${window.location.origin}/blog/${slug}`;
          const summary = stripHtml(blog.content).slice(0, 150);
          const blogReactions = reactionCounts[blog.id] || {};

          return (
            <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
              <div
                className="card blog-card shadow-sm h-100"
                onClick={() => window.open(`/blog/${slug}`, "_blank")}
                style={{ cursor: "pointer" }}
              >
                {blog.image && (
                  <img
                    src={blog.image.startsWith("http") ? blog.image : `https://ahaansoftware.com/${blog.image}`}
                    className="card-img-top blog-image"
                    alt={blog.title}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title blog-page-title">{blog.title}</h5>
                  <p className="card-text blog-content flex-grow-1">
                    {trimToWords(blog.content)}
                  </p>
                  
                  <div className="blog-author-section d-flex align-items-center mb-2 mt-auto">
                    {blog.author_image && (
                      <img
                        src={blog.author_image}
                        alt={blog.author}
                        className="author-inline-img rounded-circle me-2"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                    )}
                    <div>
                      <p className="blog-author mb-0 fw-bold">By {blog.author || "Unknown"}</p>
                      <p className="blog-date mb-0 text-muted small">
                        {formatDateTime(blog.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* Reactions */}
                  <div className="reaction-container mb-3" onClick={(e) => e.stopPropagation()}>
                    {reactions.map(({ emoji, label }) => (
                      <button
                        key={label}
                        className={`btn btn-sm me-1 ${selectedReactions[blog.id] === label ? "btn-warning" : "btn-outline-secondary"}`}
                        onClick={() => handleReaction(blog.id, label)}
                      >
                        {emoji} {blogReactions[label] || 0}
                      </button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="blog-actions d-flex justify-content-between align-items-center" onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn btn-dark btn-sm read-more-btn"
                      onClick={() => window.open(`/blog/${slug}`, "_blank")}
                    >
                      Read More
                    </button>

                    <div className="dropdown">
                      <button
                        className="btn btn-outline-dark btn-sm border-0 share-btn-icon-only no-caret"
                        type="button"
                        onClick={() => setActiveShare(activeShare === blog.id ? null : blog.id)}
                      >
                        <TfiSharethis />
                      </button>

                      {activeShare === blog.id && (
                        <div className="dropdown-menu show shadow p-2 animated-share-dropdown" style={{ right: 0, left: 'auto' }}>
                          <div className="d-flex gap-2">
                            <button className="btn btn-outline-primary btn-sm rounded-circle share-icon-btn" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`, "_blank")}>
                              <FaFacebookF />
                            </button>
                            <button className="btn btn-outline-info btn-sm rounded-circle share-icon-btn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, "_blank")}>
                              <FaLinkedinIn />
                            </button>
                            <button className="btn btn-outline-success btn-sm rounded-circle share-icon-btn" onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`🔗 Read more: ${blogUrl}`)}`, "_blank")}>
                              <FaWhatsapp />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination UI */}
      <nav className="d-flex justify-content-center mb-5">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
              Prev
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlogPage;