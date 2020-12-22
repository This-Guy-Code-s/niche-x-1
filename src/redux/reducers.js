import bgImage from '../util/imgs/bg.jpg'
import chatImage from '../util/imgs/chat.png'
import facetimeImage from '../util/imgs/facetime.png'
import blogImage from '../util/imgs/blog.jpg'
import mami_lol from '../util/imgs/x.jpeg'
import make_acc_img from '../util/imgs/sqrt.jpg'
import fv1Image from '../util/imgs/fv1.png'
import fv2Image from '../util/imgs/fv2.png'

import {top_video_urls,notifications,coming_soon,top3_banner,amazon_footer_links} from './data.js'
import {/*VIDEOS*/LIGHT_MODE,TGL_DRP_DWN} from './actions'





const initialState = {
	loading:window.sessionStorage.loaded?false:true,
	// age verified or not 18yrs of age at least (option, [good one])
	age_verified:window.sessionStorage.age_verified?true:false,
	
	// top 7 videos on landing page
	top_vidz:top_video_urls || false,
	// notifications
	notifications:window.sessionStorage.notifications?window.sessionStorage.notifications:notifications,
	// notifications
	coming_soon:window.sessionStorage.coming_soon?window.sessionStorage.coming_soon:coming_soon,
	// top 3 banner ads
	top3_banner:window.sessionStorage.top3_banner?window.sessionStorage.top3_banner:top3_banner,
	//amazon footer links
	amazon_footer_links:window.sessionStorage.amazon_footer_links?window.sessionStorage.amazon_footer_links:amazon_footer_links,

	
	// navbar triggers
	nav_link_2_drp_dwn_render:false,
	nav_link_2_drp_dwn_bool:false,

	// All Images
	bg:bgImage,
	chat:chatImage,
	facetime:facetimeImage,
	blog:blogImage,
	make_acc_img:make_acc_img,
	store_img:mami_lol,
	footer_vid:[fv1Image ,fv2Image],


	// dark mode toggles
	theme :window.sessionStorage.theme?window.sessionStorage.theme:'dark',
	theme_comp :window.sessionStorage.theme_comp?window.sessionStorage.theme_comp:'dark',


}




const reducer = (state = initialState, actions) =>{
	switch(actions.type){

		case LIGHT_MODE:
			return {
				...state,
				theme:actions.payload,
				theme_comp:actions.payload			}


		case TGL_DRP_DWN:
			return {
				...state,
				nav_link_2_drp_dwn_render:actions.payload.rend,
				nav_link_2_drp_dwn_bool:actions.payload.bool

			}
		default:
			return state
	}
}



export default reducer