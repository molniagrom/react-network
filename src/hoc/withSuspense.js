import {Suspense} from "react";
import {Preloader} from "../components/common/Preloader/Preloader";

export const withSuspense = (Element) => (props) => {
    return <Suspense fallback={<Preloader/>}>
        <Element {...props}/>
    </Suspense>

}