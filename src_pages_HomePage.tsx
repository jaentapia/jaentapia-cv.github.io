import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const categories = [
  { name: "3D Design", path: "/3d-design" },
  { name: "Jewelry Design", path: "/jewelry-design" },
  { name: "Video Editing", path: "/video-editing" },
  { name: "Photography", path: "/photography" },
  { name: "Interior and Product Design", path: "/interior-product-design" },
  { name: "360° Models", path: "/360-models" },
];

export default function HomePage() {
  return (
    <div className="home-background">
      <div className="home-categories">
        {categories.map(cat => (
          <Link
            to={cat.path}
            key={cat.name}
            className="home-category"
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <footer className="home-footer">
        <div>
          <a
            href="mailto:ibream96@gmail.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jaen Tapia Ortiz
          </a>
          <span> · </span>
          <a
            href="mailto:ibream96@gmail.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ibream96@gmail.com
          </a>
          <span> · </span>
          <a
            href="tel:+517712196706"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            +51 7712196706
          </a>
        </div>
      </footer>
    </div>
  );
}