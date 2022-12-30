function updateCounter() {
    const counter = document.getElementById('counter');
    //increment the counter everytime user visits the page by storing in local storage
    let count = localStorage.getItem('visiterCount');
    //let  location  = localStorage.getItem('visiterLocation');
    /**
     * if count is null then set count to 1
    * else increment the count by 1 (Note: count is a string so convert it to number using parseInt)
    */
    
    if (count == String(null)){
        count =1;
       
    }
    else {
        count = parseInt(count)+1;
        
    }
    localStorage.setItem('visiterCount', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;
    //localStorage.setItem('visiteLocation',location);
    //counter.innerHTML = `Vistor Location : ${localStorage.getItem('visiterLocation')}`;
}
updateCounter();