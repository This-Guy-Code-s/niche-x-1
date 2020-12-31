import bgImage from '../util/imgs/bg.jpg'
import chatImage from '../util/imgs/chat.png'
import facetimeImage from '../util/imgs/facetime.png'
import blogImage from '../util/imgs/blog.jpg'
import mami_lol from '../util/imgs/x.jpeg'
import make_acc_img from '../util/imgs/sqrt.jpg'
import fv1Image from '../util/imgs/fv1.png'
import fv2Image from '../util/imgs/fv2.png'
import dudePic from '../util/imgs/dpic.svg'
import chickPic from '../util/imgs/gpic.svg'
import quotesImage from '../util/imgs/quoteImage.png'
import quotesNImage from '../util/imgs/quoteNImage.svg'



import {
	top_video_urls,notifications,coming_soon,
	top3_banner,amazon_footer_links,store_merch,
	blog_str8,blog_sissy,blog_lesbian
} from './data.js'
import {
/*VIDEOS*/LIGHT_MODE,TGL_DRP_DWN
,STORE_SEARCH,NOTIFICATIONS,
STORE_MERCH,BLOG_POSTS
} from './actions'



const blog_list = blog_str8.concat(
	  blog_sissy,
	  blog_lesbian
	  )



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
	//store page merch
	store_merch:window.sessionStorage.store_merch?window.sessionStorage.store_merch:store_merch,
	//store edit list for search
	store_list:store_merch,
	//resetting the bubble in's when list resets
	reset:false,
	//blog post run down
	blog_str8:window.sessionStorage.blog_str8?window.sessionStorage.blog_str8:blog_str8,
	blog_sissy:window.sessionStorage.blog_sissy?window.sessionStorage.blog_sissy:blog_sissy,
	blog_lesbian:window.sessionStorage.blog_lesbian?window.sessionStorage.blog_lesbian:blog_lesbian,
  	blog_posts:blog_list,
	//currently browsing
	blog_list:blog_list,
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
	dudePic:dudePic,
	chickPic:chickPic,
	quotesImage:quotesImage,
	quotesNImage:quotesNImage,





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

		case STORE_SEARCH:
			return {
				...state,
				store_list:actions.payload.val,
				reset:actions.payload.reset
			}

		case NOTIFICATIONS:
			return {
				...state,
				notifications:actions.payload,
			}

		case STORE_MERCH:
			return {
				...state,
				store_merch:actions.payload.val,
			}

		case BLOG_POSTS:
		console.log(actions.payload)
			return {
				...state,
				blog_list:actions.payload.val,
				reset:actions.payload.reset
				
			}

			
		default:
			return state
	}
}



export default reducer