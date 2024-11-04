import React from 'react';

export function Navbar(){

}

export function Button(details){
    return(
        <button type="button" id={details.id} onclick={details.onclick}>{details.display}</button>
    );
}

export function DropDown(components){
    
}