import React, { useEffect, useState } from 'react';
import Cart from './icons/Cart';
import Share from './icons/Share';
import { HotspotComponentContainer, ImageContainer, ImageFloor, ImageBadge, HotspotWrapper, Hotspot } from './styles/HotspotComponent.styles';
import { Tooltip, TooltipContent, ImageTooltipProduct, ButtonTooltip } from './styles/Tooltip.styles';
import { FooterContainer, ImageFooterProduct, ButtonFooter } from './styles/Footer.styles';

interface Product {
  img: string;
  name: string;
  price: string;
  description: string;
  addToCartLink: string;
  detailsLink: string;
};

interface HotspotComponentProps {
  id: string;
  data: {
    src: string;
    hotspots: {
      top: string;
      left: string;
      product: Product;
    }[];
  };
};

const HotspotComponent: React.FC<HotspotComponentProps> = ({ data, id }) => {
  const [hotspots, setHotspots] = useState<any>([]);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [hoveredTooltip, setHoveredTooltip] = useState<number | null>(null);
  const [hoveredImageContainer, setHoveredImageContainer] = useState<boolean>(false);
  const [overImageContainer, setOverImageContainer] = useState<boolean>(false);
  const [hoveredFooterButtons, setHoveredFooterButtons] = useState<string>('');
  const [hotspotActivation, setHotspotActivation] = useState<boolean>(false);

  const handleOnMouseEnterHotspotWrapper = (e: any, index: number) => {
    setHotspotActivation(true)
    const targetElement = e;
    const hotspotRect = targetElement.getBoundingClientRect();
    const container = targetElement.closest('[data-imagecontainer]');
    const containerRect = container.getBoundingClientRect();

    const targetTooltip = targetElement?.nextElementSibling;
    const tooltipRect = targetTooltip?.getBoundingClientRect();

    const offsetHotspot = 10;

    // Determine horizontal and vertical positions
    let newLeft = hotspotRect.left - containerRect.left + (targetElement.clientWidth / 2);
    let newTop = hotspotRect.bottom - containerRect.top - offsetHotspot;

    const leftDifference = (hotspotRect.left - containerRect.left) - tooltipRect?.width / 2;
    const rightDifference = (containerRect.right - hotspotRect.right) - tooltipRect?.width / 2;
    const bottomDifference = (containerRect.bottom - hotspotRect.bottom) - tooltipRect?.height;

    if (leftDifference < 0)
      newLeft = newLeft - leftDifference;

    if (rightDifference < 0)
      newLeft = newLeft + rightDifference;

    if (bottomDifference < 0) {
      newTop = hotspotRect.top - containerRect.top - tooltipRect.height - offsetHotspot;
    }

    // Apply new position to the tooltip
    targetTooltip && (targetTooltip.style.left = `${newLeft}px`);
    targetTooltip && (targetTooltip.style.top = `${newTop}px`);

    setHoveredImageContainer(false);
    setHoveredHotspot(index);
  };

  const handleEnterTooltip = (index: number) => {
    setHoveredTooltip(index);
    setHoveredImageContainer(false);
    setHotspotActivation(true)
  }

  const handleTooltipVisibility = (Type: string) => {
    setHotspotActivation(false)
    setHoveredImageContainer(true);
    setTimeout(() => {
      if (Type === 'H') {
        setHoveredHotspot(null);
      } else {
        setHoveredTooltip(null);
      }
    }, 200);
  }

  useEffect(() => {
    const hotspot = document.getElementById(id);
    const hotspots = Array.from(hotspot!.querySelectorAll('[data-hotspot]')).map(hotspot => hotspot);
    setHotspots([...hotspots]);
    console.log('hotspots:', hotspots);
  }, [])

  return (
    <HotspotComponentContainer>

      <ImageContainer
        data-imagecontainer
        onMouseOver={() => setOverImageContainer(true)}
        onMouseEnter={() => setHoveredImageContainer(true)}
        onMouseLeave={() => { setOverImageContainer(false); setHoveredImageContainer(false) }}
      >
        <ImageFloor src={data.src} alt="Hotspot" />
        <ImageBadge>nou</ImageBadge>
        {data.hotspots.map((hotspot, index) => {
          const isHovered = hoveredHotspot === index || hoveredTooltip === index;
          return (
            <div key={index}>
              <HotspotWrapper
                data-hotspot
                key={index}
                $top={hoveredImageContainer || isHovered ? `calc(${hotspot.top} - 4px)` : hotspot.top}
                $left={hoveredImageContainer || isHovered ? `calc(${hotspot.left} - 3px)` : hotspot.left}
                $padding={hoveredImageContainer ? '12' : '8'}
                $isHovered={isHovered}
                onMouseOver={(e) => !hoveredHotspot && handleOnMouseEnterHotspotWrapper(e.target, index)}
                onMouseEnter={(e) => handleOnMouseEnterHotspotWrapper(e.target, index)}
                onMouseLeave={() => handleTooltipVisibility('H')}
              >
                <Hotspot
                  size={hoveredImageContainer ? '7' : '10'}
                  $isHovered={isHovered}
                  $active={hotspotActivation}
                  $isOverImageContainer={overImageContainer}
                />
              </HotspotWrapper>
              <Tooltip
                $visibility={hoveredHotspot === index || hoveredTooltip === index ? 'visible' : 'hidden'}
                data-tooltip
                onMouseEnter={() => handleEnterTooltip(index)}
                onMouseLeave={() => handleTooltipVisibility('T')}
              >
                <a href={hotspot.product.detailsLink}>
                  <ImageTooltipProduct src={hotspot.product.img} alt={hotspot.product.name} />
                </a>
                <TooltipContent>
                  <div className="tooltip-content-top">
                    <p>{hotspot.product.name} </p>
                    <small>{hotspot.product.description}</small>
                  </div>
                  <h3>{hotspot.product.price}</h3>
                  <ButtonTooltip
                    $bgColor='#ff5b00'
                    $color='#fff'
                    $borderColor='transparent'
                    $isHovered={true}
                    href={hotspot.product.addToCartLink}
                  >
                    Adaugă în coș
                  </ButtonTooltip>
                  <ButtonTooltip
                    $bgColor='#fff'
                    $color='#000'
                    $borderColor='#ccc'
                    href={hotspot.product.detailsLink}
                  >
                    Vezi produsul
                  </ButtonTooltip>
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </ImageContainer>

      <FooterContainer>
        <section className='images'>
          {
            data?.hotspots.slice(0, 3).map(({ product }, index) => (
              <ImageFooterProduct
                key={product.img}
                alt="product img"
                src={product.img}
                onMouseEnter={() => {
                  handleOnMouseEnterHotspotWrapper(hotspots[index], index);
                }}
                onMouseLeave={() => {
                  setHoveredHotspot(null);
                  setHoveredTooltip(null);
                }}
              />
            ))
          }
        </section>
        <section className='footer-buttons'>
          <ButtonFooter
            href="https://mobexpert.ro/collections/idei-de-amenajare-dining-asher"
            target='_blank'
          >
            <span>Vezi</span>
          </ButtonFooter>
          <ButtonFooter
            href='https://mobexpert.ro/collections/idei-de-amenajare-dining-asher'
            onMouseEnter={() => setHoveredFooterButtons('cart')}
            onMouseLeave={() => setHoveredFooterButtons('')}
          >
            <Cart stroke={hoveredFooterButtons === "cart" ? "#ffffff" : "#ff5b00"} />
          </ButtonFooter>

          <ButtonFooter
            href="https://mobexpert.ro/collections/idei-de-amenajare-dining-asher"
            target='_blank'
            onMouseEnter={() => setHoveredFooterButtons('share')}
            onMouseLeave={() => setHoveredFooterButtons('')}
          >
            <Share stroke={hoveredFooterButtons === "share" ? "#ffffff" : "#555555"} />
          </ButtonFooter>
        </section>
      </FooterContainer>

    </HotspotComponentContainer>
  );
};

export default HotspotComponent;
