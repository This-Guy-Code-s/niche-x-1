import axios from 'axios'
// --------------------------SEARCH VIDEOS--------------------
export const VIDEOS = "VIDEOS"
// TOGGLE DARK MODE-----------------------------------
export const LIGHT_MODE = "LIGHT_MODE"
// -------------------DISPLAY NAV LINK STATIC VALUES UPON DROP DOWN---------------------
export const TGL_DRP_DWN = "TGL_DRP_DWN"









// TOGGLE DARK MODE-----------------------------------

export const toggle_light = () => dispatch =>{
	console.log('Made IT!!!')
	if(window.sessionStorage.theme==="dark"){
		
		window.sessionStorage.setItem('theme', 'light')
			return dispatch({type:LIGHT_MODE,payload:"light"})
	}


			window.sessionStorage.setItem('theme', 'dark')
			return dispatch({type:LIGHT_MODE,payload:"dark"})
}


// TOGGLE DARK MODE-----------------------------------










//--------------------SEE CATAGORIES--------------------------


export const see_catagories = () => dispatch =>{

// make fetch call with axios {GET}
// if like a 200 then return the catagories from type CATAGORIES
// if like a 403 then return false with type CATAGORIES in which will return an error message


}

//--------------------SEE CATAGORIES---------------------------





// -------------------DISPLAY NAV LINK STATIC VALUES UPON DROP DOWN---------------------
export const toggle_drp_dwn = (bool,rend) => dispatch =>{
	return dispatch({type:TGL_DRP_DWN,payload:{bool:bool,rend:rend}})
}











// --------------------------SEARCH VIDEOS--------------------
//  - category (Optional)

// - page (Optional) Integer

// - search (Optional) Text

// - phrase (Optional) Array. Used as pornstars filter.

// - tags (Optional) Array

// - ordering (Optional) Text. Possible values are featured, newest, mostviewed and rating

// - period (Optional) Text. Only works with ordering parameter. Possible values are weekly, monthly, and alltime

// - thumbsize (Required). Possible values are small,medium,large,small_hd,medium_hd,large_hd 


export const search_video = (
	category,
	page=false,
	search=false,
	phrase=false,
	tags=false,
	ordering=false,
	period=false,
	thumbsize="medium"
		) => dispatch =>{
// create an empty object
// run a check on the parameters/arguments to fill up object with values only(no false)
// at this time the object should be filled with the relivant details 
// make fetch call with axios {POST}
// if like a 200 then return list of videos with type SEARCH_RESULTS
// if like a 403 then return false through the type SEARCH_RESULTS , in which should return error message to user

}

// --------------------------SEARCH VIDEOS--------------------



axios.post(`http://www.pornhub.com/webmasters/search?search=ebony&thumbsize="medium`)
	.then(res=>{
		console.log(res)
	})
	.catch(err=>{
		console.log(err)
	})



//--------------------GET A VIDEO---------------------------
//  - id (Required) Integer

// - thumbsize (Optional) If set, provides additional 
// thumbnails in different formats. 
// Possible values are small,medium,large,small_hd,medium_hd,large_hd 

export const get_video = (
	id,
	thumbsize=false
	) => dispatch =>{
// create an empty object
// run a check on the parameters/arguments to fill up object with values only(no false)
// at this time the object should be filled with the relivant details 
// make fetch call with axios {POST}
// if like a 200 then return the video from type CHOSEN_VIDEO
// if like a 403 then return false with type CHOSEN_VIDEO in which will return an error message


}

//--------------------GET A VIDEO---------------------------
