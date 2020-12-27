// import axios from 'axios'
// --------------------------SEARCH VIDEOS--------------------
export const VIDEOS = "VIDEOS"
// TOGGLE DARK MODE-----------------------------------
export const LIGHT_MODE = "LIGHT_MODE"
// -------------------DISPLAY NAV LINK STATIC VALUES UPON DROP DOWN---------------------
export const TGL_DRP_DWN = "TGL_DRP_DWN"
//------------------STORE SEARCH RESULTS--------------------
export const STORE_SEARCH = "STORE_SEARCH"









// TOGGLE DARK MODE-----------------------------------

export const toggle_light = () => dispatch =>{
	console.log('Made IT!!!')
	if(window.sessionStorage.theme==="light"){
		
		window.sessionStorage.setItem('theme', 'dark')
			return dispatch({type:LIGHT_MODE,payload:"dark"})
	}


			window.sessionStorage.setItem('theme', 'light')
			return dispatch({type:LIGHT_MODE,payload:"light"})
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








//------------------STORE SEARCH RESULTS--------------------
//type is basically 'catagory'...
/*
0 - if up is in str then apply price >= 200
1 - elif under is in str then apply price <= 50
2 - elif $50 is in str then apply price >= 50 || price <= 100
3 - elif $100 is in str then apply price >= 100 || price <= 200
*/
// STORE_SEARCH
export const search_res = (reset,list,filter,type) => dispatch =>{
	console.log(`filter ${filter} out of `,list, `by ${type}`)
	let newArr = []
	let regi = new RegExp(filter,'gi')
	switch (type) {
		case "title":
			break;

		case "type":
			newArr = list.filter(obj=>regi.test(obj.type))
			console.log(regi,newArr)
			if(newArr.length<1){	
			return dispatch({type:STORE_SEARCH,payload:{val:reset,reset:true}})
			}
			return dispatch({type:STORE_SEARCH,payload:{val:newArr,reset:false}})
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/
		case "price":
			// price_filter = return_num(filter)
			if(regi.test('all')){
			newArr = list				
			}
			else if(filter.includes('under')){
			newArr = list.filter(obj=> obj.price_num <= 50)				
			}
			else if(filter.includes('$50')){
			newArr = list.filter(obj=> obj.price_num >= 50 && obj.price_num <= 100 )
			}
			else if(filter.includes('$100')){
			newArr = list.filter(obj=> obj.price_num >= 100 && obj.price_num <= 200 )
			}
			console.log(regi,newArr)

			if(newArr.length<1){	
			return dispatch({type:STORE_SEARCH,payload:{val:reset,reset:true}})
			}
			return dispatch({type:STORE_SEARCH,payload:{val:newArr,reset:false}})
		
			
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/
/*ERROR HERE...PLEASE CONTINUE..............*/

		default:
			return false
	}
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



// axios.post(`${process.env.REACT_APP_HUB_API}/search?search=ebony&thumbsize="medium`)
// 	.then(res=>{
// 		console.log(res)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 	})



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
