function updateCounter() {
    const counter = document.getElementById('counter');
    //increment the counter everytime user visits the page by storing in local storage
    let count = localStorage.getItem('visiterCount');
    /**
     * if count is null then set count to 1
    * else increment the count by 1 (Note: count is a string so convert it to number using parseInt)
    */
    // var count = 1;
    // //console.log(count);
    // if(count == null){
    //    set.count(1);
    // }
    
    if(count == null){
        count = 1;
    }
    else{
        count++;
    }
    
    localStorage.setItem('visiterCount', count);

   
    // let count = localStorage.getItem('visiterLocation');
    // localStorage.setItem('visiterLocation', location);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;
    //counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterLocation')}`;
}
updateCounter();
    