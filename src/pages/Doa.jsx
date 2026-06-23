import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Doa = () => {
  const navigate = useNavigate();

  // Data doa untuk orang meninggal
  const doaList = [
    {
      id: 1,
      title: 'Doa untuk Jenazah (Laki-laki)',
      arab: 'اَللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ',
      latin: "Allahummaghfir lahu warhamhu wa 'afihi wa'fu 'anhu",
      arti: 'Ya Allah, ampunilah dia, rahmatilah dia, sejahterakan dia, dan maafkanlah dia.',
    },
    {
      id: 2,
      title: 'Doa untuk Jenazah (Perempuan)',
      arab: 'اَللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا',
      latin: "'Allahummaghfir lahā warhamhā wa 'āfihā wa'fu 'anhā'",
      arti: 'Ya Allah, ampunilah dia, rahmatilah dia, sejahterakan dia, dan maafkanlah dia.',
    },
    {
      id: 3,
      title: 'Doa Talqin (Setelah Pemakaman)',
      arab:' لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ يُحْيِى وَيُمِيْتُ، وَهُوَ حَيٌّ دَائِمٌ لَا يَمُوْتُ، بِيَدِهِ الخَيْرُ يَفْعَلُ مَا يَشَاءُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ، كُلُّ نَفْسٍ ذَائِقَةُ المَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُوْرَكُمْ يَوْمَ القِيَامَةِ، فَمَنْ زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الجَنَّةَ فَقَدْ فَازَ، وَمَا الحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الغُرُوْرِ',
      latin: "'Lā ilāha illallāhu wahdahū lā syarīka lahū, lahul mulku wa lahul hamdu yuhyī wa yumītu, wa huwa dā’imun lā yamūtu, bi yadihil khayru, yaf‘alu mā yasyā’u, wa huwa ‘alā kulli syay’in qadīrun. Kullu nafsin dzā’iqatul mawti, wa innamā tuwaffawna ujūrakum yaumal qiyāmati, fa man zuhziha anin nāri wa udkhilal jannaha fa qad fāza, wa mal hayātud duniyā illā matā‘ul ghurūri.'",
      arti: 'Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan segala pujian. Dia yang menghidupkan dan mematikan. Dia Maha Hidup dan tidak pernah mati. Di tangan-Nyalah segala kebaikan, dan Dia Maha Kuasa atas segala sesuatu. Setiap jiwa pasti akan merasakan mati. Dan sesungguhnya pada hari kiamat sajalah disempurnakan pahalamu. Barangsiapa dijauhkan dari neraka dan dimasukkan ke dalam surga, maka sungguh ia telah beruntung. Kehidupan dunia ini tidak lain hanyalah kesenangan yang memperdayakan.',
    },
    {
      id: 4,
      title: 'Doa Ziarah Kubur',
      arab: 'اَلسَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَلَاحِقُونَ أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ',
      latin: "'Assalāmu 'alaikum ahlad-diyāri minal-mu'minīna wal-muslimīna, wa innā insyā'allāhu bikum lalāḥiqūn, as'alullāha lanā wa lakumul-'āfiyah.'",
      arti: "'Semoga keselamatan tercurah atas kalian, wahai penghuni kubur dari kalangan mukmin dan muslim. Sungguh kami, insya Allah, akan menyusul kalian. Aku memohon kepada Allah keselamatan bagi kami dan kalian.'",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-sm w-full h-full bg-white flex flex-col">
        {/* Header */}
        <div className="bg-inherit h-14 w-full flex justify-between items-center p-4 border-b-2 border-gray-200 rounded-b-md drop-shadow-md flex-shrink-0">
          <button
            onClick={() => navigate('/home')}
            className="cursor-pointer hover:opacity-70 transition"
          >
            <ChevronLeft color="gray" size={24} />
          </button>
          <h1 className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
            Islamic Burial <span className="text-emerald-700">AR</span>
          </h1>
        </div>

        {/* Konten Doa */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <h1 className="text-lg text-gray-800 font-bold text-center mb-2">
            Bacaan doa untuk orang yang telah meninggal dunia
          </h1>

          {doaList.map((doa) => (
            <div
              key={doa.id}
              className="bg-emerald-200/10 rounded-lg p-4  border border-emerald-500 my-4 drop-shadow-lg"
            >
              <h2 className="text-md font-bold text-emerald-800 mb-4">
                {doa.title}
              </h2>
              <p className="text-right text-2xl font-arabic leading-relaxed mb-4">
                {doa.arab}
              </p>
              <p className="text-xs text-gray-600 italic mb-6">
                {doa.latin}
              </p>
              <p className="text-sm text-gray-700 border-t border-emerald-800 pt-2 mt-1">
                <span className="font-semibold">Arti:</span> {doa.arti}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doa;