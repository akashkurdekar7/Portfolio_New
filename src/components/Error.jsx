import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-3">Oops! This page doesn't exist.</h1>
        <p className="">
          The page you're looking for might have been moved or deleted. Don't worry, we can help!
        </p>
        <Link
          to="/"
          className="btn btn-lg mt-3"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
