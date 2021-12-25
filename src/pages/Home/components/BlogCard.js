import react from 'react';
import './css/blogCard.scss';
const BlogCard = () => {

    return (
        <>
            <div class="blog-card spring-fever">
                <div class="title-content">
                    <h3>SPRING FEVER</h3>
                    <hr />
                    <div class="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                </div>
                <div class="card-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </div>
                <div class="utility-info">
                    <ul class="utility-list">
                        <li class="comments">12</li>
                        <li class="date">03.12.2015</li>
                    </ul>
                </div>
                <div class="gradient-overlay"></div>
                <div class="color-overlay"></div>
            </div>
        </>
    )


}
export default BlogCard