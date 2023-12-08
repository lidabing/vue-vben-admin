import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

//套利新闻编辑页面

const dashboard: AppRouteModule = {
  path: '/arbitrageNews',
  name: 'Arbitrage',
  component: LAYOUT,
  redirect: '/about/arbitrageNews',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('套利工具箱'),
  },
  children: [
    {
      path: 'arbitrageNews',
      name: 'arbitrageNews',
      component: () => import('/@/views/arbitrage/news.vue'),
      meta: {
        title: t('套利新闻编辑'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'BondsData',
      name: 'BondsData',
      component: () => import('/@/views/arbitrage/BondsData.vue'),
      meta: {
        title: t('转债数据编辑'),
        icon: 'simple-icons:about-dot-me',
      },
    },
    {
      path: 'arbitrageBox',
      name: 'arbitrageBox',
      component: () => import('/@/views/arbitrage/news.vue'),
      meta: {
        title: t('套利盒子编辑'),
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default dashboard;
