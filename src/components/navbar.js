import React from 'react';


const Navbar = ({click}) => {

    function setactive(target){
        document.getElementById('a-horse').className = '';
        document.getElementById('a-harness').className = '';
        document.getElementById('a-greyhound').className = '';
        document.getElementById(target).className = 'active';
    }
    

    return (
        <nav>
            <ul class="nav nav-pills">
                <li role="presentation" ><a class='active' id='a-horse' href="#home" onClick={() => {click('horse', 'harness', 'greyhound');setactive('a-horse')}}>Horse</a></li>
                <li role="presentation" ><a id='a-harness' href="#home" onClick={() => {click('harness', 'greyhound', 'horse');setactive('a-harness')}}>Harness</a></li>
                <li role="presentation" ><a id='a-greyhound' href="#home" onClick={() => {click('greyhound','horse', 'harness');setactive('a-greyhound')}}>Greyhound</a></li>
            </ul>
        </nav>
    )
}




export default Navbar
