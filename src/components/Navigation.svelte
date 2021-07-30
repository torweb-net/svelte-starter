<script>
  import { Container, Row, Col } from 'sveltestrap'

  //Props
  export let links;

  let isMobile = false
  $: showMobileNav = false

  window.addEventListener('resize', () => {
    if(window.innerWidth < "768") {
      isMobile = true;
    } else {
      isMobile = false;
    }
  })

  const toggleMobileNav = () => {
    showMobileNav = !showMobileNav;
  }
</script>

<main class="wrapper">
  <Container fluid>
    <nav>
      <Row>

        <Col>
          <section class="branding">
            <h1>Logo</h1>
          </section>
        </Col>

        <Col>
          <section class="navigation">
            {#if !isMobile}
            <ul>
              {#each links as link}
              <li>
                <a href="{link.to}" title="Some title">{link.text}</a>
              </li>
              {/each}
            </ul>
            {/if}

            {#if isMobile}
              <button on:click={toggleMobileNav}>
                {#if !showMobileNav}
                Open menu
                {:else}
                Close menu
                {/if}
              </button>
            {/if}
          </section>
        </Col>

        {#if showMobileNav}
        <Col lg="12">
          <section class="mobile-navigation">
            <ul>
              {#each links as link}
              <li>
                <a href="{link.to}" title="Some title">{link.text}</a>
              </li>
              {/each}
            </ul>
          </section>
        </Col>
        {/if}

      </Row>
    </nav>
  </Container>
</main>

<style lang="scss">
  @import '../scss/variables.scss';
  .wrapper {
    //background-color: grey;
  }

  nav {
    height: 60px;
    max-width: 1450px;
    margin: 0 auto;

    ul {
    list-style-type: none;
    padding-left: 0;
  }
  }

  .branding {
    padding: 3px 0 0 50px;
  }

  .navigation {
    text-align: right;
    padding: 18px 50px 0 0;

      li {
        padding-left: 20px !important;
        display: inline;
      }
  }

  .mobile-navigation {
    text-align: center;
  }
</style>