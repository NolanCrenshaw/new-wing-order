import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <div>
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Head+Logo_Full+Color_White.png"
            alt="Logo Image"
          />
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Ver+Text+Logo_White.png"
            alt="Logo Text"
          />
        </div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/menu">Menu</Link>
        <span>|</span>
        <Link to="/store">Store</Link>
        <span>|</span>
        <Link to="/catering">Catering</Link>
        <span>|</span>
        <Link to="/awards">Awards</Link>
      </nav>
      {/* <nav>
        <span>info@newwingorder.com | 901.747.8893 </span>
        <ul>
          <li>
            <a href="https://www.facebook.com/NewWingOrder/">
              <img
                alt="Facebook"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEzNi4xNjY2NywyMS41aC0xMDAuMzMzMzNjLTcuOTE5MTcsMCAtMTQuMzMzMzMsNi40MTQxNyAtMTQuMzMzMzMsMTQuMzMzMzN2MTAwLjMzMzMzYzAsNy45MTkxNyA2LjQxNDE3LDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDU0LjYxNzE3di00OS44ODcxN2gtMTYuNzkxNXYtMTkuNTI5MTdoMTYuNzkxNXYtMTQuMzY5MTdjMCwtMTYuNjU1MzMgMTAuMTgzODMsLTI1LjczNTUgMjUuMDQ3NSwtMjUuNzM1NWM1LjAwOTUsLTAuMDE0MzMgMTAuMDExODMsMC4yNDM2NyAxNC45OTI2NywwLjc1MjV2MTcuNDE1aC0xMC4yMzRjLTguMDk4MzMsMCAtOS42NzUsMy44MjcgLTkuNjc1LDkuNDc0MzN2MTIuNDM0MTdoMTkuMzVsLTIuNTE1NSwxOS41MjkxN2gtMTYuOTQ5MTd2NDkuOTE1ODNoMjUuNjk5NjdjNy45MTkxNywwIDE0LjMzMzMzLC02LjQxNDE3IDE0LjMzMzMzLC0xNC4zMzMzM3YtMTAwLjMzMzMzYzAsLTcuOTE5MTcgLTYuNDE0MTcsLTE0LjMzMzMzIC0xNC4zMzMzMywtMTQuMzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/newwingorder/">
              <img
                alt="Instagram"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLDE2LjA0NjE3IC0zNS44MzMzMywzNS44MzMzM3Y1Ny4zMzMzM2MwLDE5Ljc4NzE3IDE2LjA0NjE3LDM1LjgzMzMzIDM1LjgzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzE5Ljc4NzE3LDAgMzUuODMzMzMsLTE2LjA0NjE3IDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzg3MTcgLTE2LjA0NjE3LC0zNS44MzMzMyAtMzUuODMzMzMsLTM1LjgzMzMzek0xMjksMzUuODMzMzNjMy45NTYsMCA3LjE2NjY3LDMuMjEwNjcgNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTYgLTMuMjEwNjcsNy4xNjY2NyAtNy4xNjY2Nyw3LjE2NjY3Yy0zLjk1NiwwIC03LjE2NjY3LC0zLjIxMDY3IC03LjE2NjY3LC03LjE2NjY3YzAsLTMuOTU2IDMuMjEwNjcsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjMTkuNzg3MTcsMCAzNS44MzMzMywxNi4wNDYxNyAzNS44MzMzMywzNS44MzMzM2MwLDE5Ljc4NzE3IC0xNi4wNDYxNywzNS44MzMzMyAtMzUuODMzMzMsMzUuODMzMzNjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLC0xNi4wNDYxNyAtMzUuODMzMzMsLTM1LjgzMzMzYzAsLTE5Ljc4NzE3IDE2LjA0NjE3LC0zNS44MzMzMyAzNS44MzMzMywtMzUuODMzMzN6TTg2LDY0LjVjLTExLjg3NDEyLDAgLTIxLjUsOS42MjU4OCAtMjEuNSwyMS41YzAsMTEuODc0MTIgOS42MjU4OCwyMS41IDIxLjUsMjEuNWMxMS44NzQxMiwwIDIxLjUsLTkuNjI1ODggMjEuNSwtMjEuNWMwLC0xMS44NzQxMiAtOS42MjU4OCwtMjEuNSAtMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/newwingorder">
              <img
                alt="Twitter"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEzNi4xNjY2NywyMS41aC0xMDAuMzMzMzNjLTcuOTE5MTcsMCAtMTQuMzMzMzMsNi40MTQxNyAtMTQuMzMzMzMsMTQuMzMzMzN2MTAwLjMzMzMzYzAsNy45MTkxNyA2LjQxNDE3LDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDEwMC4zMzMzM2M3LjkxOTE3LDAgMTQuMzMzMzMsLTYuNDE0MTcgMTQuMzMzMzMsLTE0LjMzMzMzdi0xMDAuMzMzMzNjMCwtNy45MTkxNyAtNi40MTQxNywtMTQuMzMzMzMgLTE0LjMzMzMzLC0xNC4zMzMzM3pNMTIyLjE5MTY3LDY4LjE4MzY3YzAsMC42MTYzMyAwLDEuMjI1NSAwLDIuNDU4MTdjMCwyMy4zNDE4MyAtMTcuODE2MzMsNTAuMzc0NSAtNTAuMzc0NSw1MC4zNzQ1Yy05LjgyNTUsMCAtMTkuMDQxODMsLTMuMDc0NSAtMjcuMDI1NSwtNy45ODM2N2MxLjIyNTUsMCAzLjA3NDUsMCA0LjMsMGM3Ljk4MzY3LDAgMTUuOTc0NSwtMy4wNzQ1IDIyLjExNjMzLC03LjM3NDVjLTcuOTgzNjcsMCAtMTQuMTI1NSwtNS41MjU1IC0xNi41ODM2NywtMTIuMjgzNjdjMS4yMjU1LDAgMi40NTgxNywwLjYxNjMzIDMuMDc0NSwwLjYxNjMzYzEuODQxODMsMCAzLjA3NDUsMCA0LjkxNjMzLC0wLjYxNjMzYy03Ljk4MzY3LC0xLjg0MTgzIC0xNC4xMjU1LC04LjYgLTE0LjEyNTUsLTE3LjJjMi40NTgxNywxLjIyNTUgNC45MTYzMywxLjg0MTgzIDcuOTgzNjcsMi40NTgxN2MtNC45MTYzMywtNC4zIC03Ljk4MzY3LC05LjIxNjMzIC03Ljk4MzY3LC0xNS4zNTgxN2MwLC0zLjA3NDUgMC42MTYzMywtNi4xNDE4MyAyLjQ1ODE3LC04LjZjOC42LDEwLjQ0MTgzIDIxLjUsMTcuODE2MzMgMzYuMjQxODMsMTguNDI1NWMwLC0xLjIyNTUgLTAuNjE2MzMsLTIuNDU4MTcgLTAuNjE2MzMsLTQuM2MwLC05LjgyNTUgNy45ODM2NywtMTcuODE2MzMgMTcuODE2MzMsLTE3LjgxNjMzYzQuOTE2MzMsMCA5LjgyNTUsMS44NDE4MyAxMi45LDUuNTI1NWM0LjMsLTAuNjE2MzMgNy45ODM2NywtMi40NTgxNyAxMS4wNTgxNywtNC4zYy0xLjIyNTUsNC4zIC00LjMsNy4zNzQ1IC03Ljk4MzY3LDkuODI1NWMzLjY4MzY3LC0wLjYxNjMzIDYuNzU4MTcsLTEuMjI1NSAxMC40NDE4MywtMy4wNzQ1Yy0yLjQ3MjUsMy42OTggLTUuNTM5ODMsNi43NjUzMyAtOC42MTQzMyw5LjIyMzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCsJxqotVF1LuhOGeC5YfKpw">
              <img
                alt="YouTube"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE1NC42NzEsNDQuMzMzYy0xLjY0ODMzLC02LjE2MzMzIC02LjUwNzMzLC0xMS4wMjIzMyAtMTIuNjcwNjcsLTEyLjY3MDY3Yy0xMS4xOCwtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjcgLTU2LjAwMDMzLC0yLjk5NTY3YzAsMCAtNDQuODIwMzMsMCAtNTYuMDAwMzMsMi45OTU2N2MtNi4xNjMzMywxLjY0ODMzIC0xMS4wMjIzMyw2LjUwNzMzIC0xMi42NzA2NywxMi42NzA2N2MtMi45OTU2NywxMS4xOCAtMi45OTU2Nyw0MS42NjcgLTIuOTk1NjcsNDEuNjY3YzAsMCAwLDMwLjQ4NyAyLjk5NTY3LDQxLjY2N2MxLjY0ODMzLDYuMTYzMzMgNi41MDczMywxMS4wMjIzMyAxMi42NzA2NywxMi42NzA2N2MxMS4xOCwyLjk5NTY3IDU2LjAwMDMzLDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2N2MwLDAgNDQuODIwMzMsMCA1Ni4wMDAzMywtMi45OTU2N2M2LjE3MDUsLTEuNjQ4MzMgMTEuMDIyMzMsLTYuNTA3MzMgMTIuNjcwNjcsLTEyLjY3MDY3YzIuOTk1NjcsLTExLjE4IDIuOTk1NjcsLTQxLjY2NyAyLjk5NTY3LC00MS42NjdjMCwwIDAsLTMwLjQ4NyAtMi45OTU2NywtNDEuNjY3ek03MS42NjY2NywxMTAuODI1MzN2LTQ5LjY1MDY3bDQzLDI0LjgyNTMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              />
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
export default Navbar;