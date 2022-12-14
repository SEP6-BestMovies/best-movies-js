import React from "react";
import requests from "../../utils/requests"; 
import { useRouter } from "next/router";
import { Button, Container, Nav, Navbar, Form } from "reactstrap";

const Genre = () => {
  const router = useRouter();

  return (
    
    <div >
          {Object.entries(requests).map(([key, { title, url }]) => (
          <Button
              onClick={() => router.push(`?genre=${key}`)}  
              key={key}>{title}
          </Button>))}
      

    </div>
    
  );
};

export default Genre;
