import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-brown-900/5 text-center mt-8 font-serif">
      <div className="max-w-sm mx-auto space-y-4">
        <div className="text-xs text-brown-800 leading-relaxed space-y-2">
            <p>
               <span className="inline-block font-bold text-brown-900 mr-1">주관 |</span>
               천안시청소년재단,<br/>천안시청소년복합커뮤니티센터 교육사업팀
            </p>
            <p>
               <span className="inline-block font-bold text-brown-900 mr-1">문의 |</span>
               <a href="tel:041-557-0924" className="hover:text-brown-900 underline">041-557-0924</a>
            </p>
        </div>
        
        <div className="pt-6 mt-6 border-t border-brown-200 space-y-2">
            <p className="text-[11px] text-brown-500 font-medium">
                ©천안시청소년복합커뮤니티센터 교육사업팀
            </p>
             <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>
                BGM: 유민규 - bed (CC BY)
            </p>
        </div>
      </div>
    </footer>
  );
};