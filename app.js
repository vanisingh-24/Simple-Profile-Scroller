const data=[
    {
      name:'John Doe',
      age: 32,
      gender: 'male',
      lookingFor:'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name:'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor:'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
      },
      {
        name:' William Johnson',
        age: 38,
        gender: 'male',
        lookingFor:'female',
        location: 'Lyon MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
      }
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click',nextProfile);

//next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;


    if(currentProfile!== undefined){
    document.getElementById('profileDisplay').innerHTML = `
     <ul class="list-group">
     <li class="list=group-item">${currentProfile.name}</li>
     <li class="list=group-item">${currentProfile.age}</li>
     <li class="list=group-item">${currentProfile.location}</li>
     <li class="list=group-item">${currentProfile.gender}</li>
     <li class="list=group-item">${currentProfile.lookingFor}</li>
          
     <ul>
    `;
     document.getElementById('imageDisplay').innerHTML=`<img src="${currentProfile.image}">`;
    }else{
        //no more profiles
        window.location.reload();
    }
    }

//profile iterator
function profileIterator(profiles){
    let nextIndex=0;

    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done:false} :
            {done: true}
        }
    };
}