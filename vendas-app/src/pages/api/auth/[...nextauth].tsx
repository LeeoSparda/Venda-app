import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers:[
      Providers.GitHub({
          clientId:'Iv1.0b0296ea79ebd2ab',
          clientSecret:'1e67de5c25ff5cdbab3e32c41718de8f8e5a3994'


      }),
      Providers.Auth0({
        clientId:'sWIRmqygCW25tnUhWrgjYyk92Pm4q8ga',
        clientSecret:'oBN2KI4BVn0xCrGCQVhBDZjxKQzsbpTfxQQCFWIqUOK1qHwvmaY38jeB9fKTv3SH',
        domain:'dev-dnuppecl.us.auth0.com'


    })
      


  




  ]





})