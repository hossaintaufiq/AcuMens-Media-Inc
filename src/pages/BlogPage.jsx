import Hero from "../components/blogPageComponents/Hero"
import BlogCard from "../components/blogPageComponents/BlogCard"
import Contact from "../components/aiSolutionPageComponents/Contact"

const BlogPage = () => {
    return (
        <div>
            <div className="w-full px-8 lg:px-0 bg-gradient-to-b from-[#eeecff] to-bg-white pt-28">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto rounded-[40px] bg-[rgb(233,229,255)] p-8 shadow-lg">
                    <Hero />
                </div>
            </div>

            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
                <BlogCard />
            </div>
            <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
                <Contact message="See how we can help your business grow with digital marketing" />
            </div>
        </div>
    )
}

export default BlogPage


// #eeecff