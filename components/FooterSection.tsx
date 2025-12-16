import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-brown-900/5 text-center mt-8">
      <div className="max-w-sm mx-auto space-y-3">
        <p className="text-xs text-brown-600 leading-relaxed">
            <strong className="block text-brown-800 mb-1">주관</strong>
            천안시청소년재단<br/>천안시청소년복합커뮤니티센터 교육사업팀
        </p>
        <p className="text-xs text-brown-600">
            <strong className="text-brown-800 mr-2">문의</strong>
            <a href="tel:041-557-0924" className="hover:text-brown-900 underline">041-557-0924</a>
        </p>
        
        <div className="pt-6 mt-6 border-t border-brown-200">
            <p className="text-[10px] text-brown-400">
                © 2025 Cheonan Youth Orchestra.
            </p>
        </div>
      </div>
    </footer>
  );
};