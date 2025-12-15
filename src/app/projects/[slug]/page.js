// src/app/projects/[slug]/page.js
import ProjectDetail from "@/components/ProjectDetail/ProjectDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Page({ params }) {
    const { slug } = await params;  // ← This fixes the error

    return (
        <>
            <Navbar />
            <ProjectDetail slug={slug} />
            <Footer />
        </>
    );
}