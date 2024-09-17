import Tabs from '@/components/common/Tabs/Tabs';
import TAB_LIST from '@/constants/tabInfo';
import ContentWrapper from '@/components/common/Wrapper/ContentWrapper';

export default function PolicyPage() {
  return (
    <ContentWrapper>
      <Tabs tabList={TAB_LIST}>
        <Tabs.ListWrapper>
          {TAB_LIST.map((tab, index) => (
            <Tabs.TabHeader key={index} index={index}>
              {tab.name}
            </Tabs.TabHeader>
          ))}
        </Tabs.ListWrapper>
        <Tabs.CurrentContent />
      </Tabs>
    </ContentWrapper>
  );
}
