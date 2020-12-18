import bg from '../util/imgs/bg.jpg'
import chat from '../util/imgs/chat.png'
import facetime from '../util/imgs/facetime.png'
import blog from '../util/imgs/blog.jpg'
import ma from '../util/imgs/sqrt.jpg'
import badd_bitch from '../util/imgs/x.jpeg'
import {top_video_urls} from './data.js'
import {VIDEOS,LIGHT_MODE,TGL_DRP_DWN} from './actions'


import fv1 from '../util/imgs/fv1.png'
import fv2 from '../util/imgs/fv2.png'


const initialState = {
	loading:window.sessionStorage.loaded?false:true,
	age_verified:window.sessionStorage.age_verified?true:false,
	
	token:window.sessionStorage.token?window.sessionStorage.token:false,
	notifications:window.sessionStorage.notifications?window.sessionStorage.notifications:false,
	
	bg:bg,


	chat:chat,
	facetime:facetime,
	blog:blog,



	nav_link_2_drp_dwn_render:false,
	nav_link_2_drp_dwn_bool:false,

	
	make_acc_img:ma,
	store_img:badd_bitch,
	footer_vid:[fv1 ,fv2],
	top_vidz:top_video_urls || false,


	theme :window.sessionStorage.theme?window.sessionStorage.theme:'light',
	theme_comp :window.sessionStorage.theme_comp?window.sessionStorage.theme_comp:'light',


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