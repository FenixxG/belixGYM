import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './page.css';

const Page = ( {children} ) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Page;