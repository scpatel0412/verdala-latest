class Filter {
    static filterProperty(object, key, array) {
        return object.filter( function (property) {
            // console.log(property.acf.property_data);
            if ( property.node.propertiesData[key] ) {
                return property.node.propertiesData[key] === array[key];
            } else {
                return null;
            }
        })
    }  

    static filterBuilding(object, key, array) {
        return object.filter( function (property) {
            // console.log(array);

            let propertyItem = property.acf.linked_project[0];
            // console.log(propertyItem.post_name);
            
            if ( propertyItem ) {
                // if ( array[key] )
                return propertyItem.post_name === array[key];
            } else {
                return null;
            }
        })
    }  
}

export default Filter;