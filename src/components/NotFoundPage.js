import {Link} from "react-router-dom";
import React from "react";

export const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;