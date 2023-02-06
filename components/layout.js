import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
    return (
        <div className="bg-primary">
            <Header></Header>
            <div className="h-screen mb-auto">{children}</div>
            <Footer></Footer>
        </div>
    );
}
