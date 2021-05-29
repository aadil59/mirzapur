import React from "react";
import { FooterSection, Row, Col, Heading, Contact } from "./style";
import {footerData} from '../../lib/app_constant';

const Footer = (props) => {
  return (
    <FooterSection>
      <div className="container">
        <Row>
          <Col>
            <Heading>
              <h2>{footerData.heading}</h2>
              <p>{footerData.desc}</p>
            </Heading>
          </Col>
          <Col>
            <Contact>
              <li>
                <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3OS4wNTggNDc5LjA1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHNjcmlwdD48L3NjcmlwdD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MzQuMTQ2IDU5Ljg4MmgtMzg5LjIzNGMtMjQuNzY2IDAtNDQuOTEyIDIwLjE0Ni00NC45MTIgNDQuOTEydjI2OS40N2MwIDI0Ljc2NiAyMC4xNDYgNDQuOTEyIDQ0LjkxMiA0NC45MTJoMzg5LjIzNGMyNC43NjYgMCA0NC45MTItMjAuMTQ2IDQ0LjkxMi00NC45MTJ2LTI2OS40N2MwLTI0Ljc2Ni0yMC4xNDYtNDQuOTEyLTQ0LjkxMi00NC45MTJ6bTAgMjkuOTQxYzIuMDM0IDAgMy45NjkuNDIyIDUuNzM4IDEuMTU5bC0yMDAuMzU1IDE3My42NDktMjAwLjM1Ni0xNzMuNjQ5YzEuNzY5LS43MzYgMy43MDQtMS4xNTkgNS43MzgtMS4xNTl6bTAgMjk5LjQxMWgtMzg5LjIzNGMtOC4yNiAwLTE0Ljk3MS02LjcxLTE0Ljk3MS0xNC45NzF2LTI1MS42NDhsMTk5Ljc3OCAxNzMuMTQxYzIuODIyIDIuNDQxIDYuMzE2IDMuNjU1IDkuODEgMy42NTVzNi45ODgtMS4yMTMgOS44MS0zLjY1NWwxOTkuNzc4LTE3My4xNDF2MjUxLjY0OWMtLjAwMSA4LjI2LTYuNzExIDE0Ljk3LTE0Ljk3MSAxNC45N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" /></span>
                Email Us<br />{footerData.email}
              </li>
              <li>
                <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMy42NCA1MTMuNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxzY3JpcHQ+PC9zY3JpcHQ+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDk5LjY2LDM3Ni45NmwtNzEuNjgtNzEuNjhjLTI1LjYtMjUuNi02OS4xMi0xNS4zNTktNzkuMzYsMTcuOTJjLTcuNjgsMjMuMDQxLTMzLjI4LDM1Ljg0MS01Ni4zMiwzMC43MiAgICBjLTUxLjItMTIuOC0xMjAuMzItNzkuMzYtMTMzLjEyLTEzMy4xMmMtNy42OC0yMy4wNDEsNy42OC00OC42NDEsMzAuNzItNTYuMzJjMzMuMjgtMTAuMjQsNDMuNTItNTMuNzYsMTcuOTItNzkuMzZsLTcxLjY4LTcxLjY4ICAgIGMtMjAuNDgtMTcuOTItNTEuMi0xNy45Mi02OS4xMiwwbC00OC42NCw0OC42NGMtNDguNjQsNTEuMiw1LjEyLDE4Ni44OCwxMjUuNDQsMzA3LjJjMTIwLjMyLDEyMC4zMiwyNTYsMTc2LjY0MSwzMDcuMiwxMjUuNDQgICAgbDQ4LjY0LTQ4LjY0QzUxNy41ODEsNDI1LjYsNTE3LjU4MSwzOTQuODgsNDk5LjY2LDM3Ni45NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /></span>
                Call Us<br />{footerData.phone}
              </li>
            </Contact>
          </Col>
        </Row>
      </div>
    </FooterSection>
  );
};

export default Footer;
