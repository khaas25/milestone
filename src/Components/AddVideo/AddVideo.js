import React from "react";

export default function AddVideo() {
  return (
    <div>
      <div className="formcontainer">
        <form>
          <h1>Add a Video</h1>
          {/* <p>{errors.title}</p> */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            // value={values.title}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </form>
      </div>
    </div>
  );
}
