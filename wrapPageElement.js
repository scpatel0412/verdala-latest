import React from "react"
import { Layout } from "./src/components/layouts/layout"
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import BisAnimate from "./src/utils/animations/PageAnim";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
    <ReactLenis root options={{ duration: 2 }}>
        <BisAnimate {...props}>
            <Layout {...props}>{element}</Layout>
        </BisAnimate>
    </ReactLenis>
)

export default wrapPageElement