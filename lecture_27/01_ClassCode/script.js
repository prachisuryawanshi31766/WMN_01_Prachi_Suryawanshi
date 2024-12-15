class Avatar
{
    // Default Constructor
    /*constructor()
    {
        this.name=""
        this.image=""
        this.description=""
    }*/

    //parametrized constructor

    constructor(name,image,description)
    {
        this.name=name;
        this.image=image;
        this.description=description;
    }
    //Getter/Setter -accessor/Mutator

    getname()
    {
        return(this.name);
    }

    getimage()
    {
        return(this.image);
    }

    getdescription()
    {
        return(this.description);
    }

    setname()
    {
        this.name=newName;
    }

    setimagepath()
    {
        this.Imagepath=newImagepath;
    }

    setdescription()
    {
        this.description=newdescription;
    }
}

//var avatar1=new avatar1("Mastya","Image path","Some Decription");
//var avatar2=new avatar2("prachi","./asscet/krishna.jpg","Some description about me");
//alert(avatar1.getname());


var avatar=[10];

var avatarName=["Mastsya","Kurma","Varah"]

for(var le=0 ; le <=10;le++)
{
    avatar[le]=new avatar(avatarName[le]);
}

for(var le=0 ; le <=10;le++)
{
    alert (avatar[le].getnamme());
}