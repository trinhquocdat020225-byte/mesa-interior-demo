import { Project, FurnitureStory, DesignPhilosophyItem, MaterialItem, Testimonial } from './types';

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90',
    title: 'Crafting Timeless Living Spaces',
    titleVi: 'Kiến Tạo Không Gian Sống Vô Cực',
    subtitle: 'Kiến tạo không gian sống mang dấu ấn riêng thông qua thiết kế nội thất tinh tế và bền vững.',
    subtitleEn: 'Crafting bespoke, soulful sanctuaries through high-end, responsive, and environmentally-attuned interior design.',
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90',
    title: 'The Art of Materiality & Silence',
    titleVi: 'Nghệ Thuật Của Vật Liệu & Khoảng Lặng',
    subtitle: 'Mỗi dự án là một tác phẩm nghệ thuật, nơi các vật liệu tự nhiên hòa quyện với ánh sáng và tỷ lệ hoàn mỹ.',
    subtitleEn: 'Every project is a composition where raw nature, precise geometry, and soft architectural lighting harmonize.',
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90',
    title: 'Sartorial Living Standards',
    titleVi: 'Đẳng Cấp Sống Độc Bản',
    subtitle: 'Độc bản và cá nhân hóa tối đa. Chúng tôi may đo không gian theo đúng phong cách sống thượng lưu của bạn.',
    subtitleEn: 'Tailored to the highest echelon of modern comfort, merging international design standards with absolute local mastery.',
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Villa Thảo Điền — Japandi Harmony',
    titleEn: 'Thao Dien Villa — Japandi Harmony',
    location: 'Quận 2, Thành phố Hồ Chí Minh',
    locationEn: 'District 2, Ho Chi Minh City',
    style: 'Japandi Luxury / Wabi-Sabi Modern',
    styleEn: 'Japandi Luxury / Wabi-Sabi Modern',
    area: '450 m²',
    year: '2025',
    description: 'Sự giao thoa hoàn mỹ giữa tinh thần tối giản Nhật Bản (Wabi-Sabi) và sự tiện nghi hiện đại của Bắc Âu. Căn biệt thự sử dụng gỗ sồi tự nhiên màu sáng, tường đất thạch cao kết cấu tự nhiên kết hợp cùng các mảng kính lớn đón nắng hướng sông Sài Gòn, kiến tạo một ốc đảo bình yên thực sự giữa lòng phố thị sầm uất.',
    descriptionEn: 'The sublime convergence of Japanese Wabi-Sabi simplicity and Nordic high-end functionality. The villa features solid white oak, custom textured plaster walls, and soaring glass portals facing the Saigon River, crafting a quiet sanctuary away from the city bustle.',
    coverImage: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
    ],
    materialsUsed: ['Gỗ sồi trắng tự nhiên', 'Đá Travertine thô', 'Sơn thạch cao đất sét', 'Vải lanh tự nhiên nhập khẩu'],
    materialsUsedEn: ['Solid White Oak', 'Raw Travertine Stone', 'Clay Plaster Paint', 'Imported Natural Linen']
  },
  {
    id: 'proj-2',
    title: 'Penthouse Landmark 81 — Modern Contemporary',
    titleEn: 'Landmark 81 Penthouse — Modern Contemporary',
    location: 'Bình Thạnh, Thành phố Hồ Chí Minh',
    locationEn: 'Binh Thanh, Ho Chi Minh City',
    style: 'Modern Luxury / Contemporary',
    styleEn: 'Modern Luxury / Contemporary',
    area: '280 m²',
    year: '2025',
    description: 'Dự án nằm tại đỉnh cao của Sài Gòn, được thiết kế với phong cách đương đại sang trọng. Nội thất tôn vinh các mảng tối ấm áp của gỗ óc chó vát góc tinh xảo, đá cẩm thạch Calacatta với những đường vân mây ấn tượng và các chi tiết kim loại đồng thau mạ xước. Mọi chi tiết đều tối giản nhưng toát lên vẻ quyền quý, thời thượng.',
    descriptionEn: 'Perched on the crown of Saigon, this penthouse exemplifies metropolitan luxury. The interior showcases masterfully carved dark American walnut, bold Calacatta marble slabs, and brushed brass fixtures, curating a highly sophisticated, high-altitude estate.',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=85'
    ],
    materialsUsed: ['Gỗ óc chó Mỹ sẫm màu', 'Đá cẩm thạch Calacatta', 'Đồng thau mạ xước', 'Da Full-grain Aniline'],
    materialsUsedEn: ['Dark American Walnut', 'Calacatta Marble', 'Brushed Brass Detail', 'Full-grain Aniline Leather']
  },
  {
    id: 'proj-3',
    title: 'Heritage Townhouse — Contemporary Classic',
    titleEn: 'Heritage Townhouse — Contemporary Classic',
    location: 'Quận 3, Thành phố Hồ Chí Minh',
    locationEn: 'District 3, Ho Chi Minh City',
    style: 'Contemporary Classic / Indochine Touch',
    styleEn: 'Contemporary Classic / Indochine Touch',
    area: '320 m²',
    year: '2024',
    description: 'Tọa lạc tại khu phố di sản rợp bóng mát Quận 3, ngôi nhà phố được cải tạo nhằm bảo tồn cấu trúc truyền thống nhưng bổ sung hơi thở đương đại châu Âu. Sự kết hợp giữa sàn gỗ xương cá, phào chỉ thạch cao thủ công tinh tế với các món đồ nội thất Ý tối giản tạo nên chiều sâu văn hóa và thẩm mỹ vô cùng quyến rũ.',
    descriptionEn: 'Located in the historic, canopy-lined streets of District 3, this townhouse was renovated to preserve classical structure while infusing Italian contemporary minimalism. Herringbone floors and custom moldings integrate beautifully with bespoke contemporary fixtures.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    materialsUsed: ['Sàn gỗ sồi xương cá', 'Thạch cao đúc thủ công', 'Gỗ gõ đỏ cao cấp', 'Kính ruy-băng sần'],
    materialsUsedEn: ['Oak Herringbone Flooring', 'Hand-molded Plaster', 'Premium Red Wood', 'Ribbed Reeded Glass']
  },
  {
    id: 'proj-4',
    title: 'Minimalist Gallery House — Phú Mỹ Hưng',
    titleEn: 'Minimalist Gallery House — Phu My Hung',
    location: 'Quận 7, Thành phố Hồ Chí Minh',
    locationEn: 'District 7, Ho Chi Minh City',
    style: 'Minimal Luxury / Gallery Style',
    styleEn: 'Minimal Luxury / Gallery Style',
    area: '380 m²',
    year: '2024',
    description: 'Dự án biến ngôi nhà phố thành một phòng trưng bày nghệ thuật sống động. Không gian là bản giao hưởng của bê tông trần mài bóng mượt, các khối đá phiến tự nhiên nguyên khối, cùng hệ thống chiếu sáng nghệ thuật 3500K tạo chiều sâu và tập trung tuyệt đối vào vẻ đẹp nguyên bản của không gian hình học.',
    descriptionEn: 'A residence transformed into a private art gallery. The architecture balances polished architectural concrete, monolith black slate blocks, and specialized 3500K gallery lighting, framing geometric voids and pure structural elegance.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    ],
    materialsUsed: ['Bê tông nghệ thuật mài bóng', 'Đá phiến đen nguyên tấm', 'Khung nhôm kính ẩn biên', 'Đèn rọi điểm nghệ thuật'],
    materialsUsedEn: ['Polished Micro-cement', 'Bespoke Black Slate Slabs', 'Hidden Slim-frame Glazing', 'Specialized Accent Lighting']
  }
];

export const FURNITURE_STORIES: FurnitureStory[] = [
  {
    id: 'story-1',
    title: 'The MESA Lounge Chair',
    titleEn: 'The MESA Lounge Chair',
    collection: 'Bộ sưu tập "Lặng" / The Silent Collection',
    collectionEn: 'The Silent Collection',
    designer: 'MESA Studio & Craftsmen',
    materials: 'Gỗ sồi uốn cong hơi nước & Da thuộc thảo mộc nguyên tấm',
    materialsEn: 'Steam-bent Oak & Full-Grain Vegetable-Tanned Leather',
    story: 'Ghế bành MESA Lounge đại diện cho đỉnh cao của kỹ nghệ chế tác mộc thủ công tại xưởng của chúng tôi. Lấy cảm hứng từ những đường cong trầm tích của các thung lũng đá cổ xưa, chiếc ghế là sự kết hợp khắt khe giữa khung gỗ sồi uốn cong bằng hơi nước ở nhiệt độ 110°C trong suốt 18 giờ, cùng lớp da bò dày thuộc thảo mộc thủ công từ Tuscany, Ý. Mỗi mối nối mộng chốt đều được giấu kín hoàn hảo, giữ lại sự tinh khiết tuyệt đối cho tổng thể tạo hình.',
    storyEn: 'The MESA Lounge Chair represents the pinnacle of craftsmanship in our ateliers. Drawing inspiration from the geological contours of ancient stone tables, the frame requires steam-bending premium solid white oak at 110°C for 18 grueling hours, and is then hand-stitched with vegetable-tanned Italian saddle leather. All joints are structurally hidden, presenting a pure, floating geometric form.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
    details: ['Khung gỗ uốn cong liên tục không vết ghép', 'Đệm da thuộc thủ công có tuổi thọ lên tới hàng trăm năm', 'Độ nghiêng tựa lưng tối ưu 107 độ cho thư giãn cột sống'],
    detailsEn: ['Seamless steam-bent frame with zero visible joints', 'Hand-stitched premium saddle leather that patinas beautifully over decades', 'An anatomically optimized 107-degree incline for spinal alignment']
  },
  {
    id: 'story-2',
    title: 'Travertine Console Desk',
    titleEn: 'Travertine Console Desk',
    collection: 'Bộ sưu tập "Đất mẹ" / The Terrene Collection',
    collectionEn: 'The Terrene Collection',
    designer: 'Studio MESA x Alberto Rossi',
    materials: 'Đá Travertine thô từ mỏ đá Tivoli, Ý',
    materialsEn: 'Aged Roman Travertine Stone from Tivoli, Italy',
    story: 'Travertine Console là lời ca ngợi gửi tới vẻ đẹp nguyên bản của đá trầm tích cổ xưa. Được cắt phay thủ công từ những khối đá tự nhiên khai thác tại vùng Tivoli lịch sử, chúng tôi cố tình giữ lại các hốc rỗ tổ ong nguyên bản trên bề mặt đá thay vì trám phẳng bằng nhựa resin công nghiệp. Bề mặt đá được chải mờ mịn như lụa bằng bàn chải sợi kim cương cao cấp, tạo nên cảm xúc xúc giác mộc mạc nhưng cực kỳ sang quý khi chạm tay vào.',
    storyEn: 'The Travertine Console is a direct tribute to the raw power of sedimentary deposits. Milled from immense blocks sourced directly in Tivoli, Italy, we intentionally preserve the signature organic pores and cavernous cavities instead of synthetic resin fillings. The surface is diamond-brushed to a silk-matte texture, offering an incredibly sensual tactile sensation that honors geological time.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
    details: ['Đục đẽo từ đá Travertine nguyên khối chịu lực tốt', 'Bề mặt mài mờ mịn không hóa chất nhân tạo', 'Tạo tác góc cạnh bất đối xứng tinh tế độc bản'],
    detailsEn: ['Bespoke structural columns carved from heavy monolith travertine', 'Diamond-brushed silk-matte finish, free of industrial fillers', 'Asymmetrical architectural geometry, making every console a unique masterpiece']
  },
  {
    id: 'story-3',
    title: 'The Oak Credenza',
    titleEn: 'The Oak Credenza',
    collection: 'Bộ sưu tập "Vết thời gian" / The Epoch Collection',
    collectionEn: 'The Epoch Collection',
    designer: 'MESA Atelier',
    materials: 'Gỗ sồi hun khói & Đồng xước cổ điển',
    materialsEn: 'Fumed White Oak & Aged Antique Brass',
    story: 'Tủ trang trí Credenza mang lại chiều sâu lịch lãm cho mọi không gian phòng khách hiện đại. Bề mặt gỗ sồi trắng được xử lý hun khói amoniac tự nhiên để đạt tới màu nâu sẫm ấm đặc trưng đâm sâu vào từng thớ thô. Cánh tủ dạng nan sóng dọc xếp đều đặn tỉ mỉ tạo hiệu ứng ánh sáng động tinh tế theo góc nhìn, bổ sung tay nắm bằng đồng thau mộc được rèn búa thủ công từ làng nghề truyền thống.',
    storyEn: 'Bringing rich narrative depth to contemporary dining and living salons. The French white oak is fumed to produce an organic dark espresso hue that penetrates deep into the heartwood. Slatted vertical wood louvers create a shifting kinetic play of light and shadow, accented by hand-hammered hardware in solid aged brass.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=85',
    details: ['Cánh nan gỗ trượt mượt mà với đường ray giảm chấn ẩn', 'Đồng thau xước cổ biến chuyển màu sắc theo thời gian dùng', 'Các ngăn chứa lót nhung tơ tằm thượng hạng bảo quản phụ kiện'],
    detailsEn: ['Slat wood doors gliding on precision hidden soft-close tracks', 'Solid brass handles designed to oxidation-patina with human touch', 'Drawer interiors lined with premium raw silk velvet']
  }
];

export const PHILOSOPHY_DATA: DesignPhilosophyItem[] = [
  {
    id: 'phil-1',
    title: 'Tinh Giản',
    titleEn: 'Minimalism',
    description: 'Chúng tôi loại bỏ hoàn toàn các yếu tố trang trí rườm rà không cần thiết, hướng tới sự tinh khiết trong hình học và tôn vinh khoảng trống đắt giá trong kiến trúc.',
    descriptionEn: 'We peel back superfluous decorative noise, celebrating geometric clarity, structural truth, and the luxurious calm of architectural negative space.',
    iconName: 'Compass'
  },
  {
    id: 'phil-2',
    title: 'Công Năng',
    titleEn: 'Functionality',
    description: 'Mỗi thiết kế trước hết phải là một giải pháp sống tối ưu. Sự sang trọng chỉ thực sự trọn vẹn khi nó phục vụ hoàn hảo cho trải nghiệm sống và thói quen sinh hoạt hàng ngày.',
    descriptionEn: 'Form serves life first. True luxury is experienced through frictionless ergonomics, intelligent spatial layout, and high-performance layouts.',
    iconName: 'Cpu'
  },
  {
    id: 'phil-3',
    title: 'Thẩm Mỹ',
    titleEn: 'Aesthetics',
    description: 'Thẩm mỹ của MESA không nằm ở sự phô trương, mà ở tỷ lệ cân đối hoàn mỹ, đường nét gãy gọn, nghệ thuật kiểm soát ánh sáng và nhịp điệu của các mảng khối vật liệu.',
    descriptionEn: 'Aesthetics of MESA are quiet but absolute. It relies on meticulous proportion, absolute alignment, delicate light play, and a poetic material palette.',
    iconName: 'Sparkles'
  },
  {
    id: 'phil-4',
    title: 'Bền Vững',
    titleEn: 'Sustainability',
    description: 'Nói không với các vật liệu nhân tạo rẻ tiền và xu hướng ngắn hạn. Chúng tôi chỉ sử dụng vật liệu tự nhiên từ nguồn cung rõ ràng, đảm bảo công trình bền bỉ qua nhiều thế hệ.',
    descriptionEn: 'Refusing transient fast-trends. We select certified natural woods, responsibly-sourced stones, and long-lived minerals meant to endure and age elegantly across generations.',
    iconName: 'Leaf'
  }
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'mat-1',
    name: 'Gỗ Tự Nhiên Cao Cấp',
    nameEn: 'Certified Solid Woods',
    description: 'Nguồn gỗ sồi sấy cao cấp và gỗ óc chó đen nhập khẩu từ rừng tái sinh Bắc Mỹ và Pháp. Toàn bộ phôi gỗ được phân loại thớ đồng đều, xử lý sấy khô đạt độ ẩm tiêu chuẩn 8-12% chống cong vênh co ngót nhiệt đới.',
    descriptionEn: 'Superlative white oak and black walnut harvested from certified sustainable forests in France and North America, dried precisely to 8-12% moisture to thrive in tropical climates.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85',
    origin: 'Nhập khẩu chính ngạch Pháp & Bắc Mỹ',
    originEn: 'Sourced and Imported from France & North America',
    properties: ['Xử lý dầu lau thực vật tự nhiên Thụy Sĩ', 'Kháng mối mọt và biến dạng tuyệt đối', 'Đạt chứng chỉ nguồn gốc FSC bền vững'],
    propertiesEn: ['Treated with high-end, organic Swiss plant-based wood oil', 'Highly resilient against warps, splits, and local humidity', 'FSC-Certified and fully traceable sustainable origin']
  },
  {
    id: 'mat-2',
    name: 'Đá Trầm Tích & Cẩm Thạch',
    nameEn: 'Sedimentary & Quartz Marbles',
    description: 'Tuyển chọn khắt khe các lốc đá Travertine cổ, đá cẩm thạch Calacatta, Arabescato nguyên tấm tại vùng Tuscany và Tivoli, Ý. Vân đá độc bản do tự nhiên kiến tạo suốt hàng triệu năm trên địa chất.',
    descriptionEn: 'Rigorous inspection of raw Roman Travertine, Calacatta Gold, and dramatic Arabescato marble blocks in Tuscany, Italy. Unique geological patterns formed over millions of years.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=85',
    origin: 'Mỏ đá Carrara và Tivoli, Italia',
    originEn: 'Quarries of Carrara and Tivoli, Italy',
    properties: ['Phủ bảo vệ nano chống thấm ố vô hình', 'Mài mờ bóng mượt cảm giác mát lành chân thật', 'Độ bền nén cao gấp 4 lần đá nhân tạo'],
    propertiesEn: ['Invisible hydrophobic nano-protection against stains', 'Diamond-brushed matte finish with high organic tactile cool', 'Unparalleled compressive strength, 4x more resilient than quartz composites']
  },
  {
    id: 'mat-3',
    name: 'Kim Loại Chế Tác Thủ Công',
    nameEn: 'Hand-Finished Architectural Metals',
    description: 'Các tấm đồng thau thô, thép đen carbon được cắt laser CNC siêu mỏng, sau đó mài xước mờ bằng tay và xử lý oxy hóa cục bộ nhằm tạo hiệu ứng đổi màu cổ xưa tinh xảo khi có tiếp xúc bàn tay người dùng.',
    descriptionEn: 'Raw brass sheets and carbon steel CNC-laser cut to micro-tolerances, hand-brushed for unique satin finishes, then custom-oxidized to create rich historical depth over time.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=85',
    origin: 'Làng nghề đồng đúc truyền thống Việt Nam',
    originEn: 'Artisan Bronze Ateliers in Vietnam',
    properties: ['Bảo vệ bề mặt chống vân tay xỉn ố nặng', 'Gia công tinh xảo tới độ dung sai <0.1mm', 'Màu sắc biến đổi cá nhân hóa theo khí hậu'],
    propertiesEn: ['Anti-fingerprint invisible wax coat protection', 'Bespoke hand joinery crafted to tolerances under 0.1mm', 'Exquisite natural aging process reacting gracefully to climate']
  },
  {
    id: 'mat-4',
    name: 'Da Thảo Mộc Tuscan',
    nameEn: 'Tuscan Vegetable-Tanned Leather',
    description: 'Sử dụng các loại da full-grain thượng hạng thuộc hoàn toàn bằng tannin thực vật chiết xuất từ cây sồi, cây hạt dẻ vùng Tuscany Ý. Không chứa chrome hóa học độc hại, mềm mại và thơm mùi gỗ mộc.',
    descriptionEn: 'Superb full-grain hides tanned naturally using wood bark, chestnut, and oak extracts in Tuscan artisan guilds. 100% chrome-free, biologically safe, releasing a warm timber scent.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85',
    origin: 'Hiệp hội thuộc da thảo mộc Tuscany, Ý',
    originEn: 'Genuine Vegetable-Tanned Leather Guild, Florence, Italy',
    properties: ['Bề mặt da tự thở và phát triển lớp bóng Patina quý giá', 'Cực kỳ êm ái thích nghi tốt với nhiệt độ cơ thể', 'Thấm hút tốt, độ bền xé và chịu nén tuyệt hảo'],
    propertiesEn: ['Naturally breathes and develops a deep, honey-toned patina over time', 'Instantly adapts to ambient and human body temperature', 'Superior tensile resilience and rich leather fragrance']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'KTS. Hoàng Anh Tuấn',
    role: 'Nhà đồng sáng lập, Tuấn & Partners Architecture',
    roleEn: 'Co-Founder, Tuan & Partners Architecture',
    content: 'MESA INTERIOR là đơn vị thi công hiếm hoi tại Việt Nam có tư duy về chi tiết vật liệu ngang tầm với các studio thiết kế danh tiếng của Ý. Từ cách các bạn xử lý mộng ghép mộc âm dương đến độ chênh lệch cực nhỏ giữa thạch cao và đá đều hoàn hảo tuyệt đối.',
    contentEn: 'MESA is one of the rare architectural execution partners in Vietnam possessing detail-oriented discipline matching high-end Italian design firms. From invisible wood dowel alignments to micro-gaps between plaster and marble, the craftsmanship is absolute.',
    project: 'Dự án Penthouse Landmark 81',
    projectEn: 'Landmark 81 Penthouse Project',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Bà Nguyễn Lan Phương',
    role: 'Chủ sở hữu Villa Thảo Điền',
    roleEn: 'Proprietor of Thao Dien Villa',
    content: 'Tôi muốn tìm kiếm một phong cách sống yên ả bình dị nhưng phải sang trọng, tinh tế. Thiết kế Japandi mà MESA mang lại thực sự thay đổi chất lượng cuộc sống của gia đình tôi. Ánh sáng tự nhiên được luân chuyển hoàn hảo qua từng ngóc ngách không gian.',
    contentEn: 'I wanted a lifestyle of slow-living and organic quietness, yet executed with extreme precision and high-end luxury. The Japandi home designed by MESA truly transformed my familys living. Natural light flows beautifully throughout the open floors.',
    project: 'Dự án Villa Thảo Điền Japandi',
    projectEn: 'Thao Dien Villa Japandi Project',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Ông Michael Phạm',
    role: 'Giám đốc Điều hành, VinaCapital Real Estate',
    roleEn: 'Managing Director, VinaCapital Real Estate',
    content: 'Hợp tác cùng MESA trong các căn hộ cao cấp cho giới chuyên gia nước ngoài, tôi ấn tượng nhất với tính kỷ luật trong thi công và triết lý bền vững của thương hiệu. Khách thuê của chúng tôi luôn dành lời khen ngợi đặc biệt cho chất lượng hoàn thiện của tủ bếp và bàn ăn.',
    contentEn: 'Collaborating with MESA on luxury residential estates for international experts, I was highly impressed by their construction discipline and strict sustainable ethos. Our clients consistently praise the quality and luxurious weight of the millworks.',
    project: 'Dự án Minimalist Gallery House',
    projectEn: 'Minimalist Gallery House Project',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];
