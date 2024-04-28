import { useContext, useEffect } from "react";
import CraftItemSection from "./ArtAndCraftItem/CraftItemSection";
import BannerSlider from "./BannerSlider/BannerSlider";
import CraftCatagory from "./Craft-Item/CraftCatagory";

import Futures from "./Futures";
import Galary from "./Galary";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {

    const { updateTitle } = useContext(AuthContext);

    // Update Dynamic title Setup
    useEffect(() => {
        updateTitle('Home | Craft Store');
    }, [updateTitle]);

    return (
        <div>

            {/* Banner Slider section */}
            <div>
                <BannerSlider></BannerSlider>
            </div>

            {/* craft Item  section */}
            <div className="lg:p-8 p-2">
                <CraftCatagory></CraftCatagory>
            </div>

            {/* Art & Craft Item section chalange extra */}
            <div>
                <CraftItemSection></CraftItemSection>
            </div>

            {/* craft Future section */}
            <div className="p-6 ">
                <Futures></Futures>
            </div>

            {/* craft Galary section */}
            <div className="p-6">
                <Galary></Galary>
            </div>

        </div>
    );
};

export default Home;