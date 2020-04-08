import React from 'react'
import Search20 from "@carbon/icons-react/lib/search/20";
import Star20 from "@carbon/icons-react/lib/star/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import Help20 from "@carbon/icons-react/lib/help/20";
import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction,Search,HeaderContainer,HeaderMenuButton,SideNav,
    SideNavMenuItem,SideNavItems,SideNavMenu,SkipToContent} from 'carbon-components-react'



function BasicHeader() {
    return (
        <div>
    <HeaderContainer
  
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
            <SkipToContent />
              <HeaderMenuButton
              data-test="menuButton"
                aria-label="Open menu"
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
              MDH
              </HeaderName>
              <Search
  className="some-class"
  closeButtonLabelText="Clear search input"
  defaultValue=""
  id="search-1"
  labelText="Search"
  name=""
  onChange={function noRefCheck(){}}
  placeHolderText="Search"
  type="text"
/>
                
                <HeaderGlobalBar>
                    <HeaderGlobalAction
                        aria-label="Star"
                        onClick={function noRefCheck() { }}
                    >
                        <Star20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction
                        aria-label="Notifications"
                        onClick={function noRefCheck() { }}
                    >
                        <Notification20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction
                        aria-label="App Switcher"
                        onClick={function noRefCheck() { }}
                    >
                        <Help20 />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
              <SideNav 
              data-test = "sideNav"
                aria-label="Side navigation"
                isRail
                expanded={isSideNavExpanded}
                >
                <SideNavItems>
                  <SideNavMenu  title="Quest">
                    <SideNavMenuItem href="">
                      TSS
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      href="">
                      Threshold
                    </SideNavMenuItem>
                    <SideNavMenuItem href="">
                      Per Call
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu  title="Non Quest">
                    <SideNavMenuItem href="">
                      Inflation
                    </SideNavMenuItem>
                    
                  </SideNavMenu>
                  
                </SideNavItems>
              </SideNav>
            </Header>
            
          </>
        )}
      />
        </div>
    )

}

export default BasicHeader;