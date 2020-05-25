const sortArray= function(arr){
	let index = -211;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0 && index === -211){
            index = i
        }
        if(arr[i]>=0 && index !== -211){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            i = index;
            index = -211
        }
    }
    return arr
}