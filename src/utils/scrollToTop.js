import { useRef, useEffect } from 'react';

const ScrollToTop = ({ children, location }) => {
    const myRef = useRef({
        location: null,
    })
    
    useEffect(() => {
        // set the location on initial load
        if (!myRef.current.location) myRef.current.location = location
        // then make sure dialog is closed on route change
        else if (myRef.current.location !== location) {

            setTimeout( function() {
                console.log("scroll");
                window.scrollTo(0, 0);
            }, 2000);

            myRef.current.location = location
        }
    })

    return (
        children
    )
    // <>
    //   <Header location={location} />
    //   <main>
    //     {children}
    //   </main>
    //   <Footer />
    // </>
}

export default ScrollToTop

// class ScrollToTop extends Component {
//     componentDidUpdate(prevProps) {
//         if (this.props.location !== prevProps.location) {
//             // setTimeout( function() {
//                 // alert("test");
//                 window.scrollTo(0, 0);
//             // }, 3000);
//             // console.log("Test");
//             // console.log(prevProps.location);
//         }
//     }
  
//     render() {
//         return this.props.children
//     }
// }
  
// export default ScrollToTop;