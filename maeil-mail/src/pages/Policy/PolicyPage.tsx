import Tabs from '@/components/common/Tabs/Tabs';
import TAB_LIST from '@/constants/tabInfo';
import ContentWrapper from '@/components/common/Wrapper/ContentWrapper';
import MetaTag from '@/components/MetaTag/MetaTag';

export default function PolicyPage() {
  return (
    <ContentWrapper>
      <MetaTag
        title="매일메일 개인정보취급방침 "
        description="개인정보취급방침 관련 내용을 담은 페이지"
        url="/policy"
      />
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
