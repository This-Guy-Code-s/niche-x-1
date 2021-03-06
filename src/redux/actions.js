// import axios from 'axios'




// --------------------------SEARCH VIDEOS--------------------
export const VIDEOS = "VIDEOS"
// TOGGLE DARK MODE-----------------------------------
export const LIGHT_MODE = "LIGHT_MODE"
// -------------------DISPLAY NAV LINK STATIC VALUES UPON DROP DOWN---------------------
export const TGL_DRP_DWN = "TGL_DRP_DWN"
//------------------STORE SEARCH RESULTS--------------------
export const STORE_SEARCH = "STORE_SEARCH"


export const NOTIFICATIONS = "NOTIFICATIONS"

export const STORE_MERCH = "STORE_MERCH"

export const BLOG_POSTS = "BLOG_POSTS"











// TOGGLE DARK MODE-----------------------------------

export const toggle_light = () => dispatch =>{
	if(window.sessionStorage.theme==="light"){
		
		window.sessionStorage.setItem('theme', 'dark')
			return dispatch({type:LIGHT_MODE,payload:"dark"})
	}


			window.sessionStorage.setItem('theme', 'light')
			return dispatch({type:LIGHT_MODE,payload:"light"})
}


// TOGGLE DARK MODE-----------------------------------













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

//returned values should be in this shape for reducer
// {val:newArr,reset:false}

//the returned array after code is done
let newArr = []




switch(type){



	case 'title':
		newArr = reset.filter(obj=> new RegExp(filter,'gi').test(obj.title))
		return dispatch({type:STORE_SEARCH,payload:{val:newArr,reset:false}})

	

	
	case 'price':

		if(/all/gi.test(filter)){
			window.sessionStorage.setItem('price_filter_4_cat','All')
			return dispatch({type:STORE_SEARCH,payload:{val:reset,reset:true}})
		}
		else if(Number(filter.slice(1,4))===100){
			window.sessionStorage.setItem('price_filter_4_cat','$100 - $200')
			newArr = reset.filter(obj=>obj.price_num >= 100 && obj.price_num <= 200)
		}
		else if(/under/gi.test(filter)){
			window.sessionStorage.setItem('price_filter_4_cat','$50 - $100')
			newArr = reset.filter(obj=>obj.price_num <= 50)
		}
		
		else if(Number(filter.slice(1,4))===50){
			window.sessionStorage.setItem('price_filter_4_cat','$50 and under')
			newArr = reset.filter(obj=>obj.price_num >= 50 && obj.price_num <= 100)
		}

			return dispatch({type:STORE_SEARCH,payload:{val:newArr,reset:false}})
		






	case 'cat':
	if(!window.sessionStorage.price_filter_4_cat){
		window.sessionStorage.price_filter_4_cat='All'
	}

		if(/all/gi.test(window.sessionStorage.price_filter_4_cat)){
			return dispatch({type:STORE_SEARCH,payload:{val:reset,reset:true}})
		}
		else if(Number(window.sessionStorage.price_filter_4_cat.slice(1,4))===100){
			newArr = reset.filter(obj=>obj.price_num >= 100 && obj.price_num <= 200)
		}
		else if(/under/gi.test(window.sessionStorage.price_filter_4_cat)){
			newArr = reset.filter(obj=>obj.price_num <= 50)
		}
		
		else if(Number(window.sessionStorage.price_filter_4_cat.slice(1,4))===50){
			newArr = reset.filter(obj=>obj.price_num >= 50 && obj.price_num <= 100)
		}


		newArr = newArr.filter(obj=>new RegExp(filter,'gi').test(obj.type))

			return dispatch({type:STORE_SEARCH,payload:{val:newArr,reset:false}})
		

		default:
		return false


	}
}






/*
kinda freestyled this part...will add doc soon, after extra tweaking and thinkin.

*/
export const blog_res = (blog_str8,blog_sissy,blog_lesbian,type,filter,reset,list,cat_or_type_filter) => dispatch =>{
	let obj = {
	blog_str8,
	blog_sissy,
	blog_lesbian,
	list
	}

	let str;
	// console.log('equiped, ', {
	// blog_str8,
	// blog_sissy,
	// blog_lesbian
	// }, 'based on ',type, 'filter out ',filter, '.....',reset,list)
	let newArr = []


		switch (type) {

			case 'title':
				newArr = reset.filter(obj=> new RegExp(filter,'gi').test(obj.title))
				return dispatch({type:BLOG_POSTS,payload:{val:newArr,reset:false}})

			case 'cat':
				 str = /straight/gi.test(cat_or_type_filter)?'blog_str8':
				/sissy/gi.test(cat_or_type_filter)?'blog_sissy':
				/lesbian/gi.test(cat_or_type_filter)?'blog_lesbian':'list';

				if(/News/gi.test(filter)){
					if(obj[str]){
					newArr = obj[str].filter(obj=> /News/gi.test(obj.type))
					}
				}
				else if(/Pictures/gi.test(filter)){
					if(obj[str]){
					newArr = obj[str].filter(obj=> /Pictures/gi.test(obj.type))
					}
				}

				else if(/Videos/gi.test(filter)){
					if(obj[str]){
					newArr = obj[str].filter(obj=> /Videos/gi.test(obj.type))
					}
				}


				if(newArr.length<1){
				return dispatch({type:BLOG_POSTS,payload:{val:reset,reset:true}})
				}				
				return dispatch({type:BLOG_POSTS,payload:{val:newArr,reset:false}})



			case "type":
				 str = /straight/gi.test(filter)?'blog_str8':
				/sissy/gi.test(filter)?'blog_sissy':
				/lesbian/gi.test(filter)?'blog_lesbian':'list';
				if(obj[str]){

				return dispatch({type:BLOG_POSTS,payload:{val:obj[str],reset:false}})
				}
				return dispatch({type:BLOG_POSTS,payload:{val:reset,reset:true}})


			default:
				return dispatch({type:BLOG_POSTS,payload:{val:reset,reset:true}})


		}
}
















/////////////////////////VERSION 2.0 BELOW////////////////////////





//--------------------SEE CATAGORIES--------------------------


export const see_catagories = () => dispatch =>{

// make fetch call with axios {GET}
// if like a 200 then return the catagories from type CATAGORIES
// if like a 403 then return false with type CATAGORIES in which will return an error message


}

//--------------------SEE CATAGORIES---------------------------





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
