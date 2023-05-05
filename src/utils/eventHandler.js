class Events {
    static multipleEvents(group, action, fn) {        
        for (var i = 0; i < group.length; i++) {
            group[i].addEventListener(action, fn);
        }
    }  
    
    static multipleEventsRemove(group, action, fn) {        
        for (var i = 0; i < group.length; i++) {
            group[i].removeEventListener(action, fn);
        }
    }
}

export default Events;