<template>
  <section class="portfolio">
    <div class="portfolio__inner">
      <h2 class="title">Products</h2>
      <div class="portfolio__wrap">
        <PortfolioCard
          v-for="(p, idx) in products"
          :key="idx"
          :title="p.title"
          :image-src="p.imageSrc"
          :description="p.description"
          :width="widthPerCard"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import PortfolioCard from '~/components/pages/top/portfolio/ProductCard.vue'

interface IProducts {
  title: string
  imageSrc: string
  description: string
}

export default {
  components: {
    PortfolioCard,
  },
  data(): {
    products: IProducts[]
  } {
    return {
      products: [
        {
          title: 'web - Frontend',
          imageSrc: '/portfolio/frontend-card.webp',
          description: 'webフロントエンドの主導・技術支援を行います。',
        },
        {
          title: 'web - PoC Development',
          imageSrc: '/portfolio/prototype-card.png',
          description: 'webサービスのフルスタックPoCを作成します。',
        },
        {
          title: 'web - Direction & Development',
          imageSrc: '/portfolio/compass.jpeg',
          description: 'web制作のディレクション・開発を行います。',
        },
        {
          title: 'SNS - Instagram - Operation',
          imageSrc: '/portfolio/instagram-card.jpg',
          description: '企業様アカウントの投稿・運用を行います。',
        },
        {
          title: 'SNS - Instagram - Contents Creation',
          imageSrc: '/portfolio/content-card.jpg',
          description: '企業様アカウントのコンテンツを制作します。',
        },
        {
          title: 'SNS - Instagram - Seminer',
          imageSrc: '/portfolio/seminer-card.jpg',
          description: '企業様にSNS運用のセミナー出張を行います。',
        },
      ],
    }
  },
  computed: {
    widthPerCard(): number {
      const w = this.$vuetify.breakpoint.width

      if (w > 0 && w < 600) {
        return w
      }
      if (w <= 661 && w < 1000) {
        return w / 2
      }

      return 500
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  height: auto;
  padding: 40px 0;

  &__inner {
    text-align: center;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;

    @include mq(sm) {
      gap: 6px;
      max-width: 100%;
    }

    @include mq(md) {
      gap: 8px;
      max-width: 100%;
    }

    @include mq(lg) {
      gap: 8px;
      max-width: 100%;
    }

    @include mq(xl) {
      gap: 8px;
      max-width: 1800px;
      margin: 0 auto;
    }
  }
}

.title {
  font-size: 32px !important;
  margin-bottom: 40px;
}
</style>
