import React from "react"
import { Layout } from "./src/components/layouts/layout"
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import BisAnimate from "./src/utils/animations/PageAnim";
import ScrollToTop from "./src/utils/scrollToTop";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
    <ReactLenis root options={{ duration: 2 }}>
        <ScrollToTop {...props}>
            <Layout {...props}><BisAnimate>{element}</BisAnimate></Layout>
        </ScrollToTop>
        
    </ReactLenis>
)

export default wrapPageElement