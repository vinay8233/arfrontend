import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Dashboard from './components/admin_components/Dashbord';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ContactList from './components/admin_components/contact.list';
import Architecture from './components/Architecture';
import Interior from './components/Interior';
import Architecturelist from './components/admin_components/Architecturelist';
import Interiorlist from './components/admin_components/Interiorlist';
import Township from './components/township';
import Rastownship from './components/rastownship';
import Studios90 from './components/Studios90';
import Theperl from './components/Theperl';
import OfficeBuilding from './components/Officebuilding';
import HousingProjects from './components/HousingProjects';
import Entertainment from './components/Entertainment';
import PrivateHouses from './components/PrivateHouses';
import Education from './components/Education';
import Culture from './components/Culture';
import Hospitality from './components/Hospitality';
import Villas from './components/Villas';
import Shreetown from './components/Shreetown';
import EvershineRustomjeeGlobalCity from './EvershineRustomjeeGlobalCity';
import Montenegro from './components/Montenegro.JS';
import AboutAwards from './components/admin_components/About.awards';
import AboutUs from './components/Aboutus';
import Housingproject from './components/Housing.project';
import Evosalchemy from './components/Evos.Alchemy,';
import Panache from './components/Panache99';
import Lodha from './components/Lodha.Fiorenza';
import Excellenseaa from './components/Excellenseaa';
import Ishatvam from './components/Ishatvam9';
import Kalpataru from './Kalpataru.Horizon';
import Rustomjee from './Rustomjee.elanza';
import Siliguri from './Siliguri';
import Rustomjeeoriana from './Rustomjee.oriana';
import Akshay27 from './Akshay27';
import Infosys from './Infosys';
import Stellar from './Stellar';
import Silver from './Silver.metropolis';
import Emami from './Emami.group';
import Screens from './72Screens';
import Courtyads from './courtyards';
import Interstellar from './Interstellar';
import Mellora from './Mellora';
import Stella from './Stella';
import Mahima from './Mahima';
import Suburbia from './components/Suburbia.club';
import Streets from './9streets';
import Happy from './Happy-benchmark';
import Triose from './Triose.mall';
import Rasclub from './Ras.club';
import Nirvana from './Nirvana63';
import Emamiclub from './Emami.club';
import Courtyardshouse from './Courtyards.house';
import Origamihouse from './Origami.house';
import Screens18 from './18screens';
import Fluidurbanhouse from './Fluid.urban.house';
import Barodahouse from './Baroda.house';
import Zensapce from './Zen.space';
import Miraihouse from './Mirai.house';
import Raipurhouse from './Raipur.house';
import Narsighar from './Narsighar';
import Rajasthanschool from './Rajasthan.school';
import Thestreet from './street';
import Prestige from './Prestige.university';
import Hitkarni from './Hitkarni.university';
import Learning from './Learning.curves';
import Thecourtyardschool from './Courtyard.school';
import Nokhavillageschool from './Nokha.village.school';
import Learningcourtyard from './Learning.courtyard';
import Iskcontemple from './Iskcon.temple';
import Shivatemple from './Shiva.temple';
import Shivamuseum from './Shiva.museum';
import Theguild from './The.guild';
import Bombayartssociety from './Bombay.arts.society';
import Chapelatmurcia from './Chapelatmurcia';
import Conventioncenter from './Convention.center';
import Asianartmuseum from './Asian.art.museum';
import Nokhavillagecommunitycentre from './Nokha.village.community.centre';
import Ariaresort from './Aria.resort&spa';
import Dcaveshotel from './Dcaves.hotel';
import Chrome from './Chrome';
import Anantajaisalmer from './TheAnanta.Jaisalmer';
import Serenitamulshilake from './La.serenita,.mulshi.lake';
import Mirajresort from './Miraj.resort';
import Jawaibandhresort from './Jawaibandh.resort';
import Ecofriendlyresort from './Eco-friendly.resort';
import Capitolhill from './Capitolhill';
import Keyshotel from './Keyshotel';
import Thepark from './The park';
import Donapaula from './Dona paula';
import Jokaemamiaastha from './Joka - emami aastha';
import Evosdevlipatna from './Evos - devlipatna';
import Evoskuranga from './Evos - kuranga';
import Villaseven from './Villa seven';
import Screen18 from './components/Screens';
import Savanihouse from './Savani.house';
import Apartmentc from './Apartment .c';
import Sanghairesidence from './Sanghai residence';
import Apartmentr from './Apartment r';
import Gulaal from './Gulaal';
import Eclectichome from './Eclectic home';
import Linealhome from './Lineal home';
import Namanoffice from './components/Naman office';
import Office63 from './Office @63';
import ProjectImages from './components/Projectimage';
import Residential from './components/Residential';
import Intprojectimages from './components/Intprojectinmage';
import Offices from './components/Offices';
import Retail from './components/Retail';
import Installations from './components/Installations';
import Admin from './components/admin_components/Admin';
import Home from './components/Home';





function App() {
  return (
    
<Router>
      <Navbar/>
      <Routes>
      <Route path='/admin' element={<Admin/>}></Route>  
      <Route path='/' element={<Home/>}></Route>  


      <Route path='/admin/dashboard' element={<Dashboard/>}></Route>  
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/architecture' element={<Architecture/>}></Route>
      <Route path="/project-images/:projectName" element={<ProjectImages />} />
      <Route path="/intproject-images/:projectName" element={<Intprojectimages />} />


      <Route path='/admin/contactlist' element={<ContactList/>}></Route>
      <Route path='/admin/Architecturelist' element={<Architecturelist/>}></Route>
      <Route path='/admin/interiorlist' element={<Interiorlist/>}></Route>
      <Route path='/interior' element={<Interior/>}></Route>
      <Route path='/interior/residential' element={<Residential/>}></Route>
      <Route path='/interior/offices' element={<Offices/>}></Route>
      <Route path='/interior/retail' element={<Retail/>}></Route>
      <Route path='/interior/installations' element={<Installations/>}></Route>


      
      <Route path='/interior/residential/18-screen' element={<Screen18/>}></Route>
      <Route path='/interior/residential/savani-house' element={<Savanihouse/>}></Route>
      <Route path='/interior/residential/apartment-c' element={<Apartmentc/>}></Route>
      <Route path='/interior/residential/sanghai-residence' element={<Sanghairesidence/>}></Route>
      <Route path='/interior/residential/apartment-r' element={<Apartmentr/>}></Route>
      <Route path='/interior/residential/gulaal' element={<Gulaal/>}></Route>
      <Route path='/interior/residential/mirai-house' element={<Miraihouse/>}></Route>
      <Route path='/interior/residential/eclectic-home' element={<Eclectichome/>}></Route>
      <Route path='/interior/residential/lineal-home' element={<Linealhome/>}></Route>

      <Route path='/interior/offices/naman-office' element={<Namanoffice/>}></Route>
      <Route path='/interior/offices/Office@63' element={<Office63/>}></Route>
      













      <Route path='/architeecture/township' element={<Township/>} ></Route>
      <Route path='/architeecture/housing-projects' element={<Housingproject/>} ></Route>
      <Route path='/architeecture/housing-projects/studios90' element={<Studios90/>} ></Route>
      <Route path='/architeecture/housing-projects/evosalchemy' element={<Evosalchemy/>} ></Route>
      <Route path='/architeecture/housing-projects/panache' element={<Panache/>} ></Route>
      <Route path='/architeecture/housing-projects/lodha' element={<Lodha/>} ></Route>
      <Route path='/architeecture/housing-projects/excellenseaa' element={<Excellenseaa/>} ></Route>
      <Route path='/architeecture/housing-projects/ishatvam-9' element={<Ishatvam/>} ></Route>
      <Route path='/architeecture/housing-projects/kalpataru-horizon' element={<Kalpataru/>} ></Route>
      <Route path='/architeecture/housing-projects/rustomjee-elenza' element={<Rustomjee/>} ></Route>
      <Route path='/architeecture/housing-projects/rustomjee-oriana' element={<Rustomjeeoriana/>} ></Route>
      <Route path='/architeecture/housing-projects/siliguri' element={<Siliguri/>} ></Route>
      <Route path='/architeecture/office-building/akshay27' element={<Akshay27/>} ></Route>
      <Route path='/architeecture/office-building/infosys' element={<Infosys/>} ></Route>
      <Route path='/architeecture/office-building/Kalpataru-synergy' element={<Kalpataru/>} ></Route>
      <Route path='/architeecture/office-building/stellar' element={<Stellar/>} ></Route>
      <Route path='/architeecture/office-building/silver-metropolis' element={<Silver/>} ></Route>
      <Route path='/architeecture/office-building/emami-group' element={<Emami/>} ></Route>
      <Route path='/architeecture/office-building/72-screens' element={<Screens/>} ></Route>
      <Route path='/architeecture/office-building/the-courtyads-office' element={<Courtyads/>} ></Route>
      <Route path='/architeecture/office-building/interstellar' element={<Interstellar/>} ></Route>
      <Route path='/architeecture/office-building/mellora' element={<Mellora/>} ></Route>
      <Route path='/architeecture/office-building/Stella' element={<Stella/>} ></Route>
      <Route path='/architeecture/office-building/mahima' element={<Mahima/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/suburbia' element={<Suburbia/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/streets' element={<Streets/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/happy-benchmark' element={<Happy/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/triose-mall' element={<Triose/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/ras-club' element={<Rasclub/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/nirvana-63' element={<Nirvana/>} ></Route>
      <Route path='/architeecture/retail&entertainmen/emami-club' element={<Emamiclub/>} ></Route>
      <Route path='/architeecture/private-houses/the-courtyards-house' element={<Courtyardshouse/>} ></Route>
      <Route path='/architeecture/private-houses/origami-house' element={<Origamihouse/>} ></Route>
      <Route path='/architeecture/private-houses/18-screens' element={<Screens18/>} ></Route>
      <Route path='/architeecture/private-houses/fluid-urban-house' element={<Fluidurbanhouse/>} ></Route>
      <Route path='/architeecture/private-houses/baroda-house' element={<Barodahouse/>} ></Route>
      <Route path='/architeecture/private-houses/zen-sapce' element={<Zensapce/>} ></Route>
      <Route path='/architeecture/private-houses/mirai-house-of-arches' element={<Miraihouse/>} ></Route>
      <Route path='/architeecture/private-houses/raipur-house' element={<Raipurhouse/>} ></Route>
      <Route path='/architeecture/private-houses/narsighar' element={<Narsighar/>} ></Route>
      <Route path='/architeecture/education/the-rajasthan-school' element={<Rajasthanschool/>} ></Route>
      <Route path='/architeecture/education/the-street' element={<Thestreet/>} ></Route>
      <Route path='/architeecture/education/prestige-university' element={<Prestige/>} ></Route>
      <Route path='/architeecture/education/hitkarni-university' element={<Hitkarni/>} ></Route>
      <Route path='/architeecture/education/learning-curves' element={<Learning/>} ></Route>
      <Route path='/architeecture/education/learning-courtyard' element={<Learningcourtyard/>} ></Route>
      <Route path='/architeecture/education/the-courtyard-school' element={<Thecourtyardschool/>} ></Route>
      <Route path='/architeecture/education/nokha-village-school' element={<Nokhavillageschool/>} ></Route>
      <Route path='/architeecture/culture/iskcon-temple' element={<Iskcontemple/>} ></Route>
      <Route path='/architeecture/culture/shiva-temple' element={<Shivatemple/>} ></Route>
      <Route path='/architeecture/culture/shiva-museum' element={<Shivamuseum/>} ></Route>
      <Route path='/architeecture/culture/the-guild' element={<Theguild/>} ></Route>
      <Route path='/architeecture/culture/bombay-arts-society' element={<Bombayartssociety/>} ></Route>
      <Route path='/architeecture/culture/chapel-at-murcia' element={<Chapelatmurcia/>} ></Route>
      <Route path='/architeecture/culture/Convention-center' element={<Conventioncenter/>} ></Route>
      <Route path='/architeecture/culture/asian-art-museum' element={<Asianartmuseum/>} ></Route>
      <Route path='/architeecture/culture/nokha-village-community-centre' element={<Nokhavillagecommunitycentre/>} ></Route>
      <Route path='/architeecture/hospitality/aria-resort&spa' element={<Ariaresort/>} ></Route>
      <Route path='/architeecture/hospitality/D-caves-hotel' element={<Dcaveshotel/>} ></Route>
      <Route path='/architeecture/hospitality/Chrome' element={<Chrome/>} ></Route>
      <Route path='/architeecture/hospitality/the-ananta-jaisalmer' element={<Anantajaisalmer/>} ></Route>
      <Route path='/architeecture/hospitality/la-serenita-mulshi-lake' element={<Serenitamulshilake/>} ></Route>
      <Route path='/architeecture/hospitality/miraj-resort' element={<Mirajresort/>} ></Route>
      <Route path='/architeecture/hospitality/jawaibandh-resort' element={<Jawaibandhresort/>} ></Route>
      <Route path='/architeecture/hospitality/eco-friendly-resort' element={<Ecofriendlyresort/>} ></Route>
      <Route path='/architeecture/hospitality/capitol-hill' element={<Capitolhill/>} ></Route>
      <Route path='/architeecture/hospitality/keys-hotel' element={<Keyshotel/>} ></Route>
      <Route path='/architeecture/hospitality/the-park' element={<Thepark/>} ></Route>
      <Route path='/architeecture/hospitality/dona-paula' element={<Donapaula/>} ></Route>
      <Route path='/architeecture/hospitality/joka-emami-aastha' element={<Jokaemamiaastha/>} ></Route>
      <Route path='/architeecture/hospitality/evos-devlipatna' element={<Evosdevlipatna/>} ></Route>
      <Route path='/architeecture/hospitality/evos-kuranga' element={<Evoskuranga/>} ></Route>
      <Route path='/architeecture/hospitality/Villa-seven' element={<Villaseven/>} ></Route>
      


      
      <Route path='/architeecture/office-building' element={<OfficeBuilding/>} ></Route>
      <Route path='/architeecture/housing-projects' element={<HousingProjects/>} ></Route>
      <Route path='/architeecture/retail&entertainment' element={<Entertainment/>} ></Route>
      <Route path='/architeecture/private-houses' element={<PrivateHouses/>} ></Route>
      <Route path='/architeecture/education' element={<Education/>} ></Route>
      <Route path='/architeecture/culture' element={<Culture/>} ></Route>
      <Route path='/architeecture/hospitality' element={<Hospitality/>} ></Route>
      <Route path='/architeecture/villas' element={<Villas/>} ></Route>
      <Route path='/architeecture/township/ras-township' element={<Rastownship/>} ></Route>
      <Route path='/architeecture/township/Studios-90' element={<Studios90/>} ></Route>
      <Route path='/architeecture/township/the-perl' element={<Theperl/>} ></Route>
      <Route path='/architeecture/township/shreetown' element={<Shreetown/>} ></Route>
      <Route path='/architeecture/township/evershine-rustomjee-global-city' element={<EvershineRustomjeeGlobalCity/>} ></Route>
      <Route path='/architeecture/township/montenegro' element={<Montenegro/>} ></Route>
      <Route path='/admin/aboutawards' element={<AboutAwards/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>

      </Routes>

    </Router>


  );
}

export default App;
