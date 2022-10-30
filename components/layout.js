import Header from './header';
import Footer from './footer';

export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            <h1>Layout</h1>
            <div>{children}</div>
            <Footer></Footer>
        </>
    )
}
