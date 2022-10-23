<template>
  <section class="price">
    <div class="price__inner">
      <h2 class="title">Price</h2>
      <div class="mb-6">
        <v-chip color="pink" text-color="white" class="ma-1"
          >必ず同梱されている項目です</v-chip
        >
        <v-chip text-color="white" class="ma-1">オプション項目です</v-chip>
      </div>
    </div>
    <v-divider class="mb-6" />
    <!-- コンテンツ作成 -->
    <div class="price__wrap">
      <!-- コンテンツ作成プラン ライト -->
      <PriceCard
        title="Instagramコンテンツ作成プラン"
        price="¥66,000"
        image-src="/portfolio/instagram-card.jpg"
      >
        <template #price-chip>
          <v-chip color="blue">ライト</v-chip>
          <small color="blue">(税込)</small>
        </template>
        <v-card-text>
          <p>✅簡単な文字・デザインのみ静止画コンテンツの作成</p>
          <p>✅1ヶ月計15コンテンツを作成</p>
          <p>✅1回までの無料の修正対応</p>
          <p>✅ストーリー対応</p>
          <p>❌リール非対応</p>
        </v-card-text>
        <v-card-text style="display: flex; flex-wrap: wrap">
          <v-chip color="pink" class="ma-1">#静止画 </v-chip>
          <v-chip color="pink" text-color="white" class="ma-1"
            >#ストーリー</v-chip
          >
          <v-chip text-color="white" class="ma-1">#リール</v-chip>
        </v-card-text>
        <v-divider />
        <v-card-text>Instagramマーケティングを導入したい企業様向け</v-card-text>
      </PriceCard>
      <!-- コンテンツ作成プラン ベーシック -->
      <PriceCard
        title="Instagramコンテンツ作成プラン"
        price="¥100,000"
        image-src="/portfolio/instagram-card.jpg"
      >
        <template #price-chip>
          <v-chip color="green">ベーシック</v-chip>
          <small color="blue">(税込)</small>
        </template>
        <v-card-text>
          <p>✅魅力的な複数の静止画コンテンツの作成</p>
          <p>✅1ヶ月計15コンテンツを作成</p>
          <p>✅1回までの無料の修正対応</p>
          <p>✅ストーリー対応</p>
          <p>✅リール対応</p>
        </v-card-text>
        <v-card-text style="display: flex; flex-wrap: wrap">
          <v-chip color="pink" class="ma-1">#静止画 </v-chip>
          <v-chip color="pink" text-color="white" class="ma-1"
            >#ストーリー</v-chip
          >
          <v-chip color="pink" class="ma-1">#リール </v-chip>
        </v-card-text>
        <v-divider />
        <v-card-text
          >動画コンテンツも使ってSNSブランディングをさらに進めていきたい企業様向け</v-card-text
        >
      </PriceCard>
      <!-- コンテンツ作成プラン プレミアム -->
      <PriceCard
        title="Instagram運用代行"
        price="¥150,000"
        image-src="/portfolio/instagram-card.jpg"
      >
        <template #price-chip>
          <v-chip color="orange">プレミアム</v-chip>
          <small color="blue">(税込)</small>
        </template>
        <v-card-text>
          <p>✅魅力的な複数の静止画コンテンツの作成</p>
          <p>✅1ヶ月計<b style="font-size: 20px">30</b>コンテンツを作成</p>
          <p>✅1回までの無料の修正対応</p>
          <p>✅ストーリー対応</p>
          <p>✅リール対応</p>
        </v-card-text>
        <v-card-text style="display: flex; flex-wrap: wrap">
          <v-chip color="pink" class="ma-1">#静止画 </v-chip>
          <v-chip color="pink" text-color="white" class="ma-1"
            >#ストーリー</v-chip
          >
          <v-chip color="pink" class="ma-1">#リール </v-chip>
        </v-card-text>
        <v-divider />
        <v-card-text
          >Instagramを使ったマーケティングで圧倒的に結果を出したい企業様向け</v-card-text
        >
      </PriceCard>
    </div>
    <v-divider class="mb-6" />
    <div class="price__wrap">
      <PriceCard
        title="Instagram運用代行プラン"
        price="¥50,000~"
        image-src="/portfolio/instagram-card.jpg"
      >
        <v-card-text style="display: flex; flex-wrap: wrap">
          <v-chip color="pink" class="ma-1">#通常コンテンツ制作</v-chip>
          <v-chip color="pink" text-color="white" class="ma-1">#投稿</v-chip>
          <v-chip color="pink" text-color="white" class="ma-1"
            >#フォロワー増加</v-chip
          >
          <v-chip color="pink" text-color="white" class="ma-1"
            >#コンテンツ制作</v-chip
          >
          <v-chip text-color="white" class="ma-1">#リール投稿</v-chip>
          <v-chip text-color="white" class="ma-1">#ストーリー投稿</v-chip>
        </v-card-text>
        <v-divider />
        <v-card-text>
          これからInstagramの運用全てを依頼したい方向け。具体的なプランを検討し、お見積りをさせていただきます。
        </v-card-text>
      </PriceCard>
    </div>
    <v-divider class="mb-6" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PriceCard from './PriceCard.vue'
export default Vue.extend({
  components: {
    PriceCard,
  },
})
</script>

<style lang="scss" scoped>
.price {
  height: auto;
  padding: 40px 0;

  &__inner {
    text-align: center;
  }

  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 24px;
    gap: 8px;
  }
}

.title {
  font-size: 32px !important;
  margin-bottom: 40px;
}
</style>
