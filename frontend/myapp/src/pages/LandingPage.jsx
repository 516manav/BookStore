import React from 'react'
import Logo from './images/Logo.png'
import book from './images/book.png'
import earth from './images/earth.png'
import community from './images/community.png'
import "./LandingPage.css"
function LandingPage() {
  return (
    <div className='flex flex-col'>
    <div className='svpFirstContainer flex-col'>
      <img className='svpFirstContainerLogo' src={Logo} alt="" />
      <div className='svpFirstContainerSlogan'>Unleash Knowledge, Spread Joy!</div>
      <div className='svpFirstContainerButtons'>
      <div className='svpFirstContainerButton'>Donate Books</div>
      <div className='svpFirstContainerButton'>Sell Books</div>
      </div>
    </div>

    <div className='svpSecondContainer'>
      <div className='svpSecondContainerHeading'>Empower the World with Books!</div>
      <div className='svpSecondContainerBody'>With every book you donate or sell, you're not just decluttering your home, you're enabling countless minds to discover new worlds, ignite their imaginations, and quench their thirst for knowledge. Join us as we redefine the future of learning with 'Books for a Better World'!</div>
    </div>

    <div className='svpThirdContainer'>
      <div className='svpThirdContainerBody'>Books Change Lives.</div>
    </div>

    <div className='svpFourthContainer'>
      <div className='svpFourthContainerCardContainer'>
      <div className='svpFourthContainerCards'>
        <img className='svpFourthContainerCardLogo' src={book} alt="" />
        <div className='svpFourthContainerCardHeading'>20,000+</div>
        <div className='svpFourthContainerCardBody'>Books Shared</div>
      </div>
      <div className='svpFourthContainerCards'>
        <img className='svpFourthContainerCardLogo' src={earth} alt="" />
        <div className='svpFourthContainerCardHeading'>50+</div>
        <div className='svpFourthContainerCardBody'>Countries Reached</div>
      </div>
      <div className='svpFourthContainerCards'>
        <img className='svpFourthContainerCardLogo' src={community} alt="" />
        <div className='svpFourthContainerCardHeading'>10,000+</div>
        <div className='svpFourthContainerCardBody'>Lives Impacted</div>
      </div>
      </div>
      <div className='svpFourthContainerFooter'>
      <div className='svpFourthContainerFooterHeading'>How it works?</div>
      <div className='svpFourthContainerFooterBody'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis odio aliquid fuga beatae exercitationem quis vitae a nemo corrupti vel provident, vero aperiam nihil repellat distinctio incidunt nostrum consequuntur sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis harum nihil inventore dolores ex minus consequatur earum vitae tempora accusamus et iure porro facilis qui deleniti, quod maiores. Sit error nam commodi ullam veniam officia nihil accusantium dolorum doloribus! Hic voluptatibus ullam facere similique aliquam? Incidunt, aut esse dolores distinctio iste nam alias quo minima cum voluptatibus eius? Veritatis, corporis.</div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
