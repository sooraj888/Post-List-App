import { Button, Pagination } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostList = ({ postData, selectedPage, setSelectedPage }: any) => {
  const navigate = useNavigate();

  const handleOnSelect = (jsonData: any) => {
    navigate("rawdata", { state: JSON.stringify(jsonData) });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="titleContainer">
        <span className="list title">Title</span>
        <span className="list title">Author</span>
        <span className="list title">Created-At</span>
        <span className="list title">URL</span>
        <span className="list title">Raw-Data</span>
      </div>

      {postData.length &&
        postData[selectedPage - 1].map((item: any) => {
          console.log(item);
          const { author, created_at, title, url, objectID } = item;
          return (
            <div key={objectID} className="listConatiner">
              <span className="list">{title}</span>
              <span className="list">{author}</span>
              <span className="list">{created_at}</span>
              <span className="list">{url}</span>
              <span className="list">
                <Button onClick={() => handleOnSelect(item)}>select</Button>
              </span>
            </div>
          );
        })}

      <Box sx={{ padding: "50px" }}>
        <Pagination
          count={postData.length}
          onChange={(e: any, value: number) => setSelectedPage(value)}
          page={selectedPage}
        ></Pagination>
      </Box>
    </Box>
  );
};

export default PostList;
