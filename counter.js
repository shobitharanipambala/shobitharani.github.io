function updateCounter() {
    const counter = document.getElementById('counter');
    let count = localStorage.getItem('visiterCount');
    
    
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
    