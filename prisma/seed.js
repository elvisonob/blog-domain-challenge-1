const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.create({
        data:
            { username: "alices", email: "alice@yahoo.com"}
            
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here

    const createdProfile = await prisma.profile.create({
        data: 
            {
            firstName:'Elvis',
            lastName:'Ono',
            location: 'London',
            Age:'32',
            biography:'I am born in Nigeria',
            email:'elvisonob@yahoo.com',
            ProfileImage:'pictures',
        
        user:{
            connect:{
                id:createdUsers.id
            }

        }
        }
    })

    console.log('createdProfile', createdProfile);

    const createdPost= await prisma.post.create({
        data:{
            title:'Will Smith messed up',
            content:'Lorem is good and Lorem is my world of world and my real heart',
            picture:'Real images',
            username:'elvis4real',

            user:{
                connect:{
                    id:createdUsers.id
                }
            }
        }
    })

    console.log('createdPost', createdPost)

    const createdComment= await prisma.comment.create({
        data: {
            content:'Will seriously messed up, he is a fucked up guy',
            username:'elvisforlife',
            postId:createdPost.id,
            userId:createdUsers.id
            }
    
        
    })

    console.log('createdComment', createdComment)
    

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })